import { CTAButton } from "@/components/CTAButton";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { primaryCtaHref, secondaryCtaHref, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about education, experience, and who I’m a good fit for as a Licensed Clinical Social Worker in Bloomington, Indiana.",
};

const fitList = [
  "You want a calm, direct therapist who will collaborate on goals.",
  "You appreciate practical tools alongside space to process feelings.",
  "You’re navigating stress, anxiety, life transitions, or relationship changes.",
  "You value clear expectations, boundaries, and follow-up between sessions.",
];

export default function About() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">About</p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              A grounded partner in your care
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              I am a {siteConfig.practitioner} serving {siteConfig.location}. My style is calm,
              collaborative, and practical—centered on what helps you move toward what matters most.
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
        eyebrow="Background"
        title="Education and experience"
        subtitle="Licensure, training, and practice history inform the work we’ll do together."
        background="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Education">
            <p>Master of Social Work (MSW) with a focus on clinical practice and community care.</p>
            <p className="text-sm text-slate-600">
              Continuing education in trauma-informed care, ACT, and DBT-informed approaches.
            </p>
          </Card>
          <Card title="Experience">
            <p>
              Experience in outpatient counseling, care coordination, and collaborating with medical and
              psychiatric providers to support whole-person care.
            </p>
          </Card>
          <Card title="Good to know">
            <p>
              Telehealth provided to clients located in Indiana. In-person sessions available in
              Bloomington as openings allow. Not a crisis service.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Fit" title="Who I’m a good fit for" subtitle="You deserve a therapist who matches your needs.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Clients who feel at home here">
            <ul className="space-y-3 text-slate-700">
              {fitList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="If I’m not the right fit">
            <p>
              I will gladly connect you with colleagues who may better match your needs, preferences, or
              schedule. Your care and safety come first.
            </p>
            <p className="text-sm text-slate-600">
              If you are in immediate danger call 911; in the U.S. you can call or text 988 for crisis
              support.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
