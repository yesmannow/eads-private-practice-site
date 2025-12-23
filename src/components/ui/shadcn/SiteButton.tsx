import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type SiteButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

// Map site variants to shadcn/ui variants
// IMPORTANT: Each variant must provide proper contrast:
// - primary: Dark bg + white text (for light backgrounds)
// - secondary: Light bg + dark text (for light backgrounds) - maps to outline
// - outline: White bg + dark text (works on both light AND dark backgrounds)
// - ghost: Transparent + hover (text color from context or explicit className)
const variantMap: Record<ButtonVariant, "default" | "secondary" | "ghost" | "outline"> = {
  primary: "default",
  secondary: "outline",
  ghost: "ghost",
  outline: "outline",
};

export function SiteButton({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: SiteButtonProps) {
  const shadcnVariant = variantMap[variant];

  // Custom brand styling: rounded-full for primary/secondary, maintain site's look
  const brandClasses = variant === "primary" || variant === "secondary"
    ? "rounded-full"
    : "";

  if (href) {
    // For primary buttons, !text-primary-foreground in variant already uses !important
    // so it will win over any conflicting text-* classes
    const variantClasses = buttonVariants({ variant: shadcnVariant, size: "default" });
    const linkClassName = cn(variantClasses, brandClasses, "button-interactive", className);

    return (
      <Link
        href={href}
        className={linkClassName}
        aria-label={(props as { "aria-label"?: string })["aria-label"]}
      >
        {children}
      </Link>
    );
  }

  return (
    <Button
      type={type}
      variant={shadcnVariant}
      className={cn(brandClasses, "button-interactive", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

