import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button Variants
 *
 * IMPORTANT: Each variant MUST set BOTH background AND foreground colors.
 * This ensures proper contrast and prevents dark-on-dark or light-on-light issues.
 *
 * - default: Dark background (primary) + white text - for primary actions on light backgrounds
 * - secondary: Light background (secondary) + dark text - for secondary actions on light backgrounds
 * - outline: White/light background + dark text - works on both light AND dark backgrounds
 * - ghost: Transparent + hover effects - for subtle actions
 * - destructive: Red background + white text - for destructive actions
 *
 * For buttons on dark backgrounds (e.g., CTA bands with bg-primary):
 * - Use variant="outline" to get white background with dark text
 * - Or use variant="ghost" with explicit text-primary-foreground for transparent buttons
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Primary: Dark background + white text (for light page backgrounds)
        // IMPORTANT: !text-primary-foreground uses !important to override any conflicting text-* classes
        default: "bg-primary !text-primary-foreground hover:brightness-110 hover:shadow-md",
        // Destructive: Red background + white text
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-110 hover:shadow-md focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        // Outline: White/light background + dark text (works on both light AND dark backgrounds)
        outline:
          "border border-border bg-background text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        // Secondary: Light background (secondary) + dark text (for light page backgrounds)
        secondary:
          "bg-secondary text-secondary-foreground hover:brightness-95 hover:shadow-md",
        // Ghost: Transparent + hover effects (text color inherits from context)
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        // Link: Text link style
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  // For primary buttons, !text-primary-foreground in variant already uses !important
  // so it will win over any conflicting text-* classes
  const finalClassName = cn(buttonVariants({ variant, size }), className)

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={finalClassName}
      {...props}
    />
  )
}

export { Button, buttonVariants }
