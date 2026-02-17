import type { LucideIcon } from "lucide-react";
import { Home, User, HeartHandshake, MessageSquare, ExternalLink } from "lucide-react";

export type SectionNavItem = {
  href: `#${string}`;
  label: string;
};

export type MobileNavItem = SectionNavItem & {
  icon: LucideIcon;
};

export type ExternalNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  isExternal: true;
};

export const desktopNavItems: SectionNavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#connect", label: "Connect" },
];

export const mobileNavItems: MobileNavItem[] = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#approach", label: "Approach", icon: HeartHandshake },
  { href: "#connect", label: "Connect", icon: MessageSquare },
];

export const clientPortalNavItem: ExternalNavItem = {
  href: "https://blazingstar.sessionshealth.com/",
  label: "Portal",
  icon: ExternalLink,
  isExternal: true,
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
