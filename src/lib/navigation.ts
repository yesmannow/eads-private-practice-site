import type { LucideIcon } from "lucide-react";
import { Home, Info, MessageCircle } from "lucide-react";

export type SectionNavItem = {
  href: `#${string}`;
  label: string;
};

export type MobileNavItem = SectionNavItem & {
  icon: LucideIcon;
};

export const desktopNavItems: SectionNavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "My Approach" },
  { href: "#contact", label: "Connect" },
];

export const mobileNavItems: MobileNavItem[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#contact", label: "Connect", icon: MessageCircle },
];

export const clientPortalNavItem = {
  href: "https://blazingstar.sessionshealth.com/",
  label: "Client Portal",
};

export function scrollToSection(href: string) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  if (!href.startsWith("#")) {
    return false;
  }

  const targetId = href.slice(1);
  const targetEl = document.getElementById(targetId);
  if (!targetEl) {
    return false;
  }

  targetEl.scrollIntoView({ behavior: "smooth" });
  return true;
}
