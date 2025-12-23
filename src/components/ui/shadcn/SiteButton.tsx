import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SiteButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

// Map site variants to shadcn/ui variants
const variantMap: Record<ButtonVariant, "default" | "secondary" | "ghost" | "outline"> = {
  primary: "default",
  secondary: "outline",
  ghost: "ghost",
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
    return (
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: shadcnVariant, size: "default" }),
          brandClasses,
          "button-interactive",
          className
        )}
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

