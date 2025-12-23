import Link from "next/link";
import { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
};

const variantClasses: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-sky-900 text-white shadow-sm hover:bg-sky-800 focus-visible:outline-sky-900",
  secondary:
    "border border-sky-900 text-sky-900 hover:bg-sky-50 focus-visible:outline-sky-900",
  ghost:
    "text-sky-900 hover:bg-sky-50 focus-visible:outline-sky-900 focus-visible:ring-0",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  ariaLabel,
}: CTAButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]}`}
      href={href}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
