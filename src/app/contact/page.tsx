import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to request a consultation or ask a question. Includes important safety and privacy notes.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">Contact</p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Reach out to begin
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              Please share a few details about what you’re looking for. Do not include sensitive
              clinical details. I’ll respond within 2 business days to schedule a brief consultation.
            </p>
            <div className="rounded-2xl bg-sky-50 p-4 text-sm text-slate-800">
              <p className="font-semibold">Crisis support</p>
              <p>
                If you are in immediate danger call 911. In the U.S. you can call or text 988 for the
                Suicide & Crisis Lifeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section background="muted">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Contact details</h2>
            <div className="mt-4 space-y-2 text-slate-700">
              <p>Phone: {siteConfig.contact.phone}</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>{siteConfig.location}</p>
              <p className="text-sm text-slate-600">
                Telehealth available to clients physically located in Indiana. In-person sessions in
                Bloomington as available.
              </p>
            </div>
            <div className="mt-6">
              <CTAButton variant="secondary" href={`mailto:${siteConfig.contact.email}`}>
                Email the practice
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              aria-describedby="contact-privacy-note"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800" htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800" htmlFor="contact-preference">
                    Preferred contact
                  </label>
                  <select
                    id="contact-preference"
                    name="contact-preference"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                    defaultValue="email"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-800" htmlFor="message">
                    What would you like to share?
                  </label>
                  <p className="text-xs text-slate-600">Do not include sensitive clinical details.</p>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                  placeholder="Scheduling needs, goals, or questions"
                />
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Privacy note</p>
                <p>
                  This form is for general inquiries only and is not monitored continuously. Please do
                  not include sensitive clinical details. Crisis needs should be directed to emergency
                  services.
                </p>
                <p className="mt-2">
                  If you are in immediate danger call 911; in the U.S. you can call or text 988.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-sky-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  Send message
                </button>
                <Link
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-sky-900 hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
                >
                  Email instead
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
