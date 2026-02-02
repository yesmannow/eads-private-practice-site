"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { clientPortalNavItem, sectionNavItems, scrollToSection } from "@/lib/navigation";

export function HeaderNav() {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (scrollToSection(href)) {
      e.preventDefault();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#a8be57]/30 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-sm font-medium text-foreground">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-[#a8be57]"
        >
          Blazing Star Therapy
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-semibold text-foreground lg:flex"
        >
          {sectionNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSectionClick(e, item.href)}
              className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-[#a8be57]/10 hover:text-[#4a5c2c]"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={clientPortalNavItem.href}
            className="inline-flex items-center gap-2 rounded-full border border-[#a8be57]/40 bg-[#a8be57]/10 px-4 py-2 text-sm font-semibold text-[#3b4a2a] transition duration-200 hover:bg-[#a8be57]/20"
          >
            <ExternalLink className="h-4 w-4 text-[#3b4a2a]" />
            {clientPortalNavItem.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export const Header = HeaderNav;
