"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { Button } from "./ui/button";

const navItems = [
  { href: "/start-here", label: "Start Here" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/fees-faq", label: "Fees & FAQ" },
];

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <header className="relative border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
          aria-label="Steady Path Counseling home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-base font-semibold text-sky-900">
            <span>SP</span>
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold">{site.name}</p>
            <p className="text-sm text-slate-600">{site.locationShort}</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-slate-800 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-1 transition hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="px-4 py-2">
            Contact
          </Button>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={site.ctaPrimaryHref}>{site.ctaPrimaryLabel}</Button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="lg:hidden"
        >
          <div className="fixed inset-0 bg-slate-900/30" onClick={() => setIsOpen(false)} />
          <div className="absolute inset-x-0 top-full z-10 origin-top bg-white shadow-lg ring-1 ring-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-3" role="menu">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    ref={index === 0 ? firstLinkRef : undefined}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-base font-medium text-slate-900 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button href="/contact" className="justify-start">
                  Contact
                </Button>
                <Button href={site.ctaPrimaryHref} className="justify-start">
                  {site.ctaPrimaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export const Header = HeaderNav;
