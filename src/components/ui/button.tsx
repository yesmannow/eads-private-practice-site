import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-900 text-white shadow-sm hover:bg-sky-800 focus-visible:outline-sky-900",
  secondary:
    "border border-sky-900 text-sky-900 hover:bg-sky-50 focus-visible:outline-sky-900",
  ghost:
    "text-sky-900 hover:bg-sky-50 focus-visible:outline-sky-900 focus-visible:ring-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`;
  const ariaLabel = (props as { "aria-label"?: string })["aria-label"];

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
