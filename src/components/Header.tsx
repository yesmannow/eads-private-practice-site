"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { clientPortalNavItem, desktopNavItems, scrollToSection } from "@/lib/navigation";

export function HeaderNav() {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (scrollToSection(href)) {
      e.preventDefault();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/50 bg-[#FAF9F6]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-sm font-medium text-stone-900">
        <Link
          href="/"
          className="text-lg font-serif font-bold tracking-tight text-stone-900 transition-colors hover:text-[#7C3AED]"
        >
          Blazing Star Therapy
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-semibold text-stone-700 lg:flex"
        >
          {desktopNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSectionClick(e, item.href)}
              className="rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-stone-100 hover:text-[#1B261D]"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={clientPortalNavItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED] bg-transparent px-4 py-2 text-sm font-semibold text-[#7C3AED] transition duration-300 ease-in-out hover:bg-[#7C3AED] hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            {clientPortalNavItem.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export const Header = HeaderNav;
