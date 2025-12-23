import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { primaryCtaHref, secondaryCtaHref, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Calm, practical counseling for adults in Bloomington, Indiana. Request a consultation to get started.",
};

const howItWorks = [
  {
    title: "Schedule a brief consult",
    description:
      "We will spend 15 minutes clarifying what you need and whether we are a good fit. No pressure, just information.",
  },
  {
    title: "Set goals together",
    description:
      "We outline what feeling better looks like for you and decide on a starting focus, session cadence, and communication preferences.",
  },
  {
    title: "Begin steady sessions",
    description:
      "Sessions are calm, collaborative, and structured so you leave with clear takeaways you can use between meetings.",
  },
];

const highlights = [
  "Licensed clinical social worker serving Indiana",
  "Telehealth and Bloomington-based sessions",
  "Evidence-informed and skills-focused",
  "Warm, practical, and collaborative",
];

const services = [
  {
    title: "Stress, burnout, and life transitions",
    body: "Reduce overwhelm, set boundaries, and build routines that feel sustainable.",
  },
  {
    title: "Anxiety and rumination",
    body: "Practical strategies to calm the body, shift worry loops, and practice self-compassion.",
  },
  {
    title: "Relationships and communication",
    body: "Improve communication, repair patterns, and navigate conflict with clarity.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-sky-50/40 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
                {siteConfig.location}
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Calm, clear counseling for adults in Bloomington and across Indiana
              </h1>
              <p className="text-lg leading-8 text-slate-700">
                Together we will slow things down, set practical goals, and build skills you can use
                right away. Sessions are steady, collaborative, and respectful of your time and energy.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
                <CTAButton variant="secondary" href={secondaryCtaHref}>
                  Contact
                </CTAButton>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-900 text-xs font-semibold text-white">
                      ✓
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-sky-900">What to expect</p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    A steady space to breathe, reflect, and practice new skills
                  </h2>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li>• Sessions that balance reflection with practical next steps</li>
                    <li>• Tools pulled from ACT, DBT-informed skills, and mindfulness</li>
                    <li>• Collaborative pacing so you never feel rushed or stuck</li>
                  </ul>
                  <div className="rounded-2xl bg-sky-50 p-4 text-sm text-slate-800">
                    <p>
                      If you are in immediate danger, call 911. In the U.S. you can also call or text
                      988 for crisis support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="How it works"
        title="Three calm, clear steps"
        subtitle="We will move at a thoughtful pace so you always know what comes next."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((step, idx) => (
            <Card key={step.title} title={`${idx + 1}. ${step.title}`}>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Support that meets you where you are"
        subtitle="Carefully paced sessions with practical takeaways for life outside of therapy."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} title={service.title}>
              <p>{service.body}</p>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900">Ready when you are</p>
            <p className="text-slate-700">
              Telehealth across Indiana and in-person options in Bloomington with flexible scheduling.
            </p>
          </div>
          <div className="flex gap-3">
            <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
            <CTAButton variant="secondary" href={secondaryCtaHref}>
              Contact
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Approach"
        title="Grounded, evidence-informed care"
        subtitle="I blend acceptance and commitment therapy (ACT), DBT-informed skills, and mindfulness so you gain tools that fit your life."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="ACT">
            <p>
              Clarify your values, practice willingness, and make small, doable choices that align with
              what matters most.
            </p>
          </Card>
          <Card title="DBT-informed skills">
            <p>
              Build distress tolerance, emotional regulation, and interpersonal effectiveness to stay
              steady in tough moments.
            </p>
          </Card>
          <Card title="Mindfulness">
            <p>
              Learn to notice thoughts and sensations without judgment, creating space for calmer
              responses.
            </p>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="Let’s find out if we’re a good fit"
        subtitle="You deserve a space that feels calm and respectful. If I am not the right match, I will offer thoughtful referrals."
        background="muted"
      >
        <div className="flex flex-col gap-4 rounded-3xl bg-sky-900 px-8 py-10 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold">Start with a brief consultation</p>
            <p className="text-sky-100">
              We will clarify your goals, discuss logistics, and set a pace that works for you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton variant="secondary" href={primaryCtaHref}>
              Request a consultation
            </CTAButton>
            <CTAButton variant="ghost" href={secondaryCtaHref}>
              Contact
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
