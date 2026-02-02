"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteButton, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "My Approach" },
  { href: "#contact", label: "Let's Connect" },
];

export function HeaderNav() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the # symbol
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative border-b border-border bg-background/95 text-foreground backdrop-blur fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-foreground lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="rounded-full px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-foreground hover:text-accent hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="rounded-lg px-3 py-2 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-foreground hover:bg-accent/20 hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export const Header = HeaderNav;
