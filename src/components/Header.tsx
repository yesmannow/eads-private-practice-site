"use client";

import { useEffect, useRef, useState } from "react";
import { clientPortalNavItem, desktopNavItems, scrollToSection } from "@/lib/navigation";

export function HeaderNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 50) {
        setVisible(true);
      } else if (current > lastScrollY.current + 5) {
        setVisible(false);
      } else if (current < lastScrollY.current - 5) {
        setVisible(true);
      }

      lastScrollY.current = current;

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
          <a
            href={clientPortalNavItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#1B261D] bg-[#90b654] border border-[#90b654] transition duration-200 ease-in-out hover:bg-[#536930] hover:text-[#f5f7ec] shadow-sm shadow-[#90b654]/40"
          >
            {clientPortalNavItem.label}
          </a>
        </nav>
      </div>
    </header>
  );
}

export const Header = HeaderNav;
