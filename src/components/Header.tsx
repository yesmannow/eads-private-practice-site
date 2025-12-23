"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { SiteButton } from "./ui/shadcn/SiteButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/shadcn/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "/start-here", label: "Start Here" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/fees-faq", label: "Fees & FAQ" },
];

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <header className="relative border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
          aria-label="Steady Path Counseling home"
        >
          <Image
            src="/images/branding/website-logo.png"
            alt="Steady Path Counseling logo"
            width={160}
            height={40}
            className="h-7 w-auto sm:h-10"
            priority
          />
          <div className="hidden leading-tight sm:block">
            <p className="text-base font-semibold">{site.name}</p>
            <p className="text-sm text-slate-600">{site.locationShort}</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-slate-800 lg:flex"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900 ${
                  isActive
                    ? "bg-sky-50 text-sky-900 font-semibold"
                    : "text-slate-800 hover:text-sky-900"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <SiteButton href="/contact" className="px-4 py-2">
            Contact
          </SiteButton>
        </nav>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                aria-label="Open navigation menu"
              >
                <span className="sr-only">Toggle menu</span>
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-3" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-accent"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <SiteButton href="/contact" className="justify-start w-full">
                  Contact
                </SiteButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export const Header = HeaderNav;
