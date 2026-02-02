export type SectionNavItem = {
  href: `#${string}`;
  label: string;
};

export type RouteNavItem = {
  href: string;
  label: string;
};

export const sectionNavItems: SectionNavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "My Approach" },
  { href: "#contact", label: "Let's Connect" },
];

export const clientPortalNavItem: RouteNavItem = {
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
