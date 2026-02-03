"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clientPortalNavItem, desktopNavItems, scrollToSection } from "@/lib/navigation";

export function HeaderNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Always show at top of page
      if (current <= 50) {
        setVisible(true);
      } else if (current > lastScrollY.current + 5) {
        // Scrolling down - hide
        setVisible(false);
      } else if (current < lastScrollY.current - 5) {
        // Scrolling up - show
        setVisible(true);
      }

      lastScrollY.current = current;

      // Show nav when scrolling stops
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
      resetTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (scrollToSection(href)) {
      e.preventDefault();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Centered floating nav bar */}
      <div className="hidden lg:flex justify-center pt-4 px-4">
        <nav
          aria-label="Primary"
          className="inline-flex items-center gap-2 rounded-full border border-stone-200/50 bg-[#FAF9F6]/95 backdrop-blur-md px-3 py-2 shadow-lg shadow-stone-200/30"
        >
          {desktopNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSectionClick(e, item.href)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-stone-700 transition duration-200 ease-in-out hover:bg-stone-100 hover:text-[#1B261D]"
            >
              {item.label}
            </a>
          ))}
          <Link
            href={clientPortalNavItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#90b654] px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-[#7CA44A]"
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
