import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { primaryCtaHref, secondaryCtaHref } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Counseling for stress, anxiety, life transitions, and relationship challenges in Bloomington and across Indiana.",
};

const serviceCards = [
  {
    title: "Stress, burnout, and boundaries",
    points: [
      "Reset your schedule and priorities",
      "Develop boundaries that feel respectful and doable",
      "Rebuild energy with realistic routines",
    ],
  },
  {
    title: "Anxiety, worry, and rumination",
    points: [
      "Understand triggers and body cues",
      "Practice grounding and self-soothing skills",
      "Work with perfectionism and people-pleasing",
    ],
  },
  {
    title: "Relationships and communication",
    points: [
      "Prepare for hard conversations",
      "Repair patterns that keep you stuck",
      "Align choices with your values",
    ],
  },
];

const logistics = [
  "50-minute sessions with calm pacing and clear structure.",
  "Telehealth for clients located in Indiana; in-person options in Bloomington when available.",
  "Adults and older teens; evening appointments available upon request.",
  "If I am not the right fit, I will offer thoughtful referrals.",
];

export default function Services() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
              Services
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Support for the moments that feel heavy or unclear
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              Counseling that balances reflection with practical tools so you can feel calmer,
              connected, and more in control of your choices.
            </p>
            <div className="flex gap-3">
              <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
              <CTAButton variant="secondary" href={secondaryCtaHref}>
                Contact
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What I help with"
        title="Areas of focus"
        subtitle="Each session blends skills practice, reflection, and planning so you have clear takeaways."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <Card key={service.title} title={service.title}>
              <ul className="space-y-3 text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Logistics"
        title="How we’ll work together"
        subtitle="Clear expectations and boundaries help the work feel safer and more predictable."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Session flow">
            <p>
              We check in, focus on one or two priorities, and end with a brief summary and next step.
              You will always know the plan for the week ahead.
            </p>
          </Card>
          <Card title="Practice policies">
            <ul className="space-y-3 text-slate-700">
              {logistics.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
