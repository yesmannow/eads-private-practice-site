import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portal | Blazing Star Therapy",
  description: "Access the secure client portal for appointments, billing, and secure messaging.",
};

const PORTAL_URL = "https://blazingstar.sessionshealth.com/";

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2]">
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl space-y-8 rounded-[32px] border border-[#a8be57]/30 bg-white/80 p-8 shadow-2xl shadow-[#a8be57]/20">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#3b4a2a]">Client Portal</p>
            <h1 className="text-3xl font-semibold text-[#1f2a19] md:text-4xl">Blazing Star Sessions</h1>
            <p className="text-base text-gray-700">
              Securely manage appointments, confidential messaging, and documents through Sessions Health.
              If you need help, email <Link href="mailto:tucker@blazingstartherapy.com" className="font-semibold text-[#3b4a2a] hover:text-[#a8be57]">tucker@blazingstartherapy.com</Link>.
            </p>
          </div>

          <div className="h-[65vh] w-full overflow-hidden rounded-[24px] border border-[#a8be57]/40 bg-[#1f2a19] sm:h-[75vh]">
            <iframe
              src={PORTAL_URL}
              title="Client Portal"
              className="h-full w-full"
              loading="lazy"
              frameBorder="0"
            />
          </div>

          <div className="flex justify-center">
            <Link
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#a8be57]/50 bg-[#a8be57] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#96a84a]"
            >
              Open portal in new tab
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
