import { ReactNode } from "react";
import { SiteButton } from "./ui/shadcn/SiteButton";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  ariaLabel,
}: CTAButtonProps) {
  return (
    <SiteButton href={href} variant={variant} aria-label={ariaLabel}>
      {children}
    </SiteButton>
  );
}
