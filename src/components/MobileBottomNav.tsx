"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clientPortalNavItem, mobileNavItems, scrollToSection } from "@/lib/navigation";

export function MobileBottomNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current <= 0) {
        setVisible(true);
      } else if (current > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = current;

      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
      resetTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, []);

  return (
    <nav
      aria-label="Mobile navigation"
      className={`lg:hidden fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-4 rounded-2xl border border-stone-200/50 bg-[#FAF9F6]/95 px-4 py-3 shadow-2xl shadow-stone-200/50 backdrop-blur-md">
        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-stone-700">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  if (scrollToSection(item.href)) {
                    event.preventDefault();
                  }
                }}
                className="flex flex-col items-center gap-1 transition duration-300 ease-in-out hover:text-[#7C3AED]"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[0.55rem] font-semibold">{item.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href={clientPortalNavItem.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#7C3AED] bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#7C3AED] transition duration-300 ease-in-out hover:bg-[#7C3AED] hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            <span>{clientPortalNavItem.label}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
