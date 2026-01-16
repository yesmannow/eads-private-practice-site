import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/branding/bst-website-secondary-logo.png"
                alt="Blazing Star Therapy secondary logo"
                width={40}
                height={40}
                className="opacity-80"
              />
              <div>
                <p className="text-lg font-semibold">{site.name}</p>
                <p className="text-slate-700">{site.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              {site.locationShort} · {site.telehealthLine}
            </p>
            <p className="text-sm text-slate-700">
              Licensed Social Worker (MA, LSW)
            </p>
            <div className="space-y-1 text-sm text-slate-800">
              <p>
                Phone:{" "}
                <Link
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="underline decoration-slate-300 underline-offset-4 hover:text-sky-900"
                >
                  {site.phone}
                </Link>
              </p>
              <p>
                Email:{" "}
                <Link
                  href={`mailto:${site.email}`}
                  className="underline decoration-slate-300 underline-offset-4 hover:text-sky-900"
                >
                  {site.email}
                </Link>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Links
            </p>
            <ul className="space-y-2 text-sm text-slate-800">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#accessibility"
                  className="hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Disclaimer
            </p>
            <p className="text-sm leading-6 text-slate-700">
              This site provides general information and is not a substitute for emergency services.
              If you are in immediate danger, call 911 or text/call 988 in the U.S.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Serving {site.locationShort} | {site.telehealthLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
