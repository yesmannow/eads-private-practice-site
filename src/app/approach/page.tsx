import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { primaryCtaHref, secondaryCtaHref } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "A steady blend of ACT, DBT-informed skills, and mindfulness explained in plain language.",
};

const approaches = [
  {
    title: "Acceptance & Commitment Therapy (ACT)",
    description:
      "We clarify what matters most, make space for tough feelings, and choose actions that align with your values. The goal is flexibility, not perfection.",
  },
  {
    title: "DBT-informed skills",
    description:
      "We borrow practical tools from DBT to regulate emotions, tolerate distress, and communicate clearly. Skills are taught in-session and practiced between visits.",
  },
  {
    title: "Mindfulness, without the jargon",
    description:
      "We build brief, realistic mindfulness habits to help you notice patterns, calm the body, and respond rather than react.",
  },
];

const commitments = [
  "Plain English explanations so you know why we’re using a tool.",
  "Collaborative pacing: we adjust intensity based on how you’re doing.",
  "Curiosity over judgment—every feeling is allowed in the room.",
  "Practical follow-ups so you leave sessions with something concrete.",
];

export default function Approach() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">Approach</p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Practical, evidence-informed counseling
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              You will know what we’re doing and why. We will blend reflection with skills and keep
              checking that the work feels useful.
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
        eyebrow="Modalities"
        title="How we work together"
        subtitle="Each approach is adapted to your pace, culture, and goals."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {approaches.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Therapy style"
        title="What you can expect in the room"
        subtitle="A collaborative, grounded style with room for both feelings and action."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Tone">
            <p>
              Warm, calm, and direct. We balance empathy with gentle accountability so you feel seen
              and supported while moving toward change.
            </p>
          </Card>
          <Card title="Commitments to you">
            <ul className="space-y-3 text-slate-700">
              {commitments.map((item) => (
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
