import Link from "next/link";
import { navLinks, secondaryCtaHref, siteConfig } from "@/config/site";
import { CTAButton } from "./CTAButton";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-lg font-semibold text-slate-900">{siteConfig.name}</p>
            <p className="text-slate-700">
              {siteConfig.tagline} Serving clients in {siteConfig.location}.
            </p>
            <div className="space-y-1 text-sm text-slate-600">
              <p>{siteConfig.practitioner}</p>
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>Email: {siteConfig.contact.email}</p>
            </div>
            <div>
              <CTAButton href={secondaryCtaHref} variant="secondary">
                Contact
              </CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm text-slate-700 sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Explore</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Client care</p>
              <ul className="space-y-2">
                <li>Telehealth for Indiana residents</li>
                <li>Adults and older teens</li>
                <li>Evening availability by request</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Policies</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="transition hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                  >
                    Privacy & terms
                  </Link>
                </li>
                <li>
                  <span className="text-slate-600">
                    Not for emergency use. Call 911 or 988 in crisis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Calm, accessible care for {siteConfig.location}.</p>
        </div>
      </div>
    </footer>
  );
}
