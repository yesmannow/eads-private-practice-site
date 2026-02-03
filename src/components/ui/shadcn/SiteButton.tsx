"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
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

  const reducedMotion = useReducedMotion() ?? false;

  // Custom brand styling: rounded-full for primary/secondary, maintain site's look
  const brandClasses = variant === "primary" || variant === "secondary"
    ? "rounded-full"
    : "";

  // Micro-interactions for primary buttons only, disabled when reduced motion is enabled
  const shouldAnimate = variant === "primary" && !reducedMotion;
  const motionProps = shouldAnimate
    ? {
        whileHover: { y: -1 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const },
      }
    : {};

  if (href) {
    // For primary buttons, !text-primary-foreground in variant already uses !important
    // so it will win over any conflicting text-* classes
    const variantClasses = buttonVariants({ variant: shadcnVariant, size: "default" });
    const linkClassName = cn(variantClasses, brandClasses, "button-interactive", className);

    if (shouldAnimate) {
      return (
        <motion.div {...motionProps} style={{ display: "inline-block" }}>
          <Link
            href={href}
            className={linkClassName}
            aria-label={(props as { "aria-label"?: string })["aria-label"]}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

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

  if (shouldAnimate) {
    return (
      <motion.div {...motionProps} style={{ display: "inline-block" }}>
        <Button
          type={type}
          variant={shadcnVariant}
          className={cn(brandClasses, "button-interactive", className)}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
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

