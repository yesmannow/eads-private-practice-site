"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { clientPortalNavItem, mobileNavItems, scrollToSection } from "@/lib/navigation";

export function MobileBottomNav() {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("#home");
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

      // Determine active section
      const sections = ["home", "about", "approach", "connect"];
      const reversedSections = [...sections].reverse();
      for (const section of reversedSections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, []);

  // Combine mobile nav items with client portal
  const allNavItems = [
    ...mobileNavItems,
    clientPortalNavItem,
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className={`lg:hidden fixed inset-x-0 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-2 rounded-2xl border border-stone-200/50 bg-[#fdfcf8]/95 px-2 py-2 shadow-2xl shadow-stone-300/40 backdrop-blur-md">
        <div className="flex items-center justify-around">
          {allNavItems.map((item) => {
            const Icon = item.icon;
            const isExternal = "isExternal" in item && item.isExternal;
            const isActive = !isExternal && activeSection === item.href;

            if (isExternal) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition duration-200 ease-in-out text-[#7C3AED] hover:bg-[#7C3AED]/10"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-[9px] font-semibold tracking-wide">
                    {item.label}
                  </span>
                </Link>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  if (scrollToSection(item.href)) {
                    event.preventDefault();
                  }
                }}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition duration-200 ease-in-out ${
                  isActive
                    ? "text-[#1B261D] bg-[#1B261D]/10"
                    : "text-stone-500 hover:text-[#1B261D] hover:bg-stone-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[9px] font-semibold tracking-wide">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
