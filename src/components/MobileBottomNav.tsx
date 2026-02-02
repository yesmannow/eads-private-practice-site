"use client";

import Link from "next/link";
import { ExternalLink, Home, Info, BookOpen, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clientPortalNavItem, sectionNavItems, scrollToSection } from "@/lib/navigation";

const mobileNavIcons = [Home, Info, BookOpen, MessageCircle];

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
      <div className="mx-4 rounded-2xl border border-[#a8be57]/30 bg-white/95 px-4 py-3 shadow-2xl shadow-[#a8be57]/20 backdrop-blur">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-[#3b4a2a]">
          {sectionNavItems.map((item, index) => {
            const Icon = mobileNavIcons[index] ?? Home;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  if (scrollToSection(item.href)) {
                    event.preventDefault();
                  }
                }}
                className="flex flex-col items-center gap-1 transition-colors duration-200 hover:text-[#a8be57]"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[0.6rem] font-semibold">{item.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href={clientPortalNavItem.href}
            className="flex items-center gap-2 rounded-full border border-[#a8be57]/50 bg-[#a8be57]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#3b4a2a] transition-colors duration-200 hover:border-[#a8be57] hover:bg-[#a8be57]/25"
          >
            <ExternalLink className="h-4 w-4" />
            <span>{clientPortalNavItem.label}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
