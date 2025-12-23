import Link from "next/link";
import { navLinks, primaryCtaHref, secondaryCtaHref, siteConfig } from "@/config/site";
import { CTAButton } from "./CTAButton";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900 text-white">
            <span className="text-lg font-semibold">BW</span>
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-slate-900">
              {siteConfig.name}
            </p>
            <p className="text-sm text-slate-600">{siteConfig.location}</p>
          </div>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton variant="secondary" href={secondaryCtaHref}>
            Contact
          </CTAButton>
          <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
        </div>
      </div>
      <div className="lg:hidden">
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 pb-4 text-sm font-medium text-slate-700 sm:px-6 lg:px-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 transition hover:border-sky-900 hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
            >
              {link.label}
            </Link>
          ))}
          <CTAButton href={primaryCtaHref} variant="ghost">
            Consult
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
