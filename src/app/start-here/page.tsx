import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { primaryCtaHref, secondaryCtaHref } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start here",
  description:
    "Learn how to request a consultation, what to expect in the first session, and how we’ll work together.",
};

const steps = [
  {
    title: "Reach out",
    detail:
      "Share what you’re hoping for, your preferred times, and whether you want telehealth or in-person in Bloomington.",
  },
  {
    title: "15-minute consult",
    detail:
      "We confirm fit, review fees and policies, and answer any questions. If another provider is better suited, I will offer referrals.",
  },
  {
    title: "First full session",
    detail:
      "We clarify goals, discuss your support system, and set 1–2 focus areas so you leave with a plan.",
  },
];

const preparation = [
  "A quiet place for telehealth (Indiana residents only).",
  "Questions about scheduling, communication preferences, or accessibility needs.",
  "Any hopes, goals, or worries you want me to know so we pace the work appropriately.",
];

export default function StartHere() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
              Start here
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              A calm, clear path to getting started
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              You deserve a process that feels straightforward. Here’s how we’ll move from inquiry to
              feeling supported in sessions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
              <CTAButton variant="secondary" href={secondaryCtaHref}>
                Contact
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How it works"
        title="Three steps to begin"
        subtitle="Transparent, predictable steps so you always know what to expect."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} title={`${index + 1}. ${step.title}`}>
              <p>{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Prepare"
        title="What to bring to your first session"
        subtitle="There is no perfect preparation—just a few details that help us start with clarity."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Practical details">
            <ul className="space-y-3 text-slate-700">
              {preparation.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="What happens after we meet">
            <p>
              We will set a schedule that fits your week, review any accommodations you need, and agree
              on communication boundaries between sessions. You will leave with a simple plan for the
              next 2–3 weeks.
            </p>
            <p className="text-sm text-slate-600">
              Not an emergency service. If you are in immediate danger call 911; in the U.S. you can
              call or text 988.
            </p>
          </Card>
        </div>
        <div className="flex flex-wrap gap-3">
          <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
          <CTAButton variant="secondary" href={secondaryCtaHref}>
            Contact
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
