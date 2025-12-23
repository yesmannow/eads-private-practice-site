import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Section, Card, SiteButton, Callout, PageHero, SiteLink } from "@/components/ui";
import { toolIcons } from "@/lib/icons";

export const metadata: Metadata = createMetadata({
  title: "Resources",
  description:
    "Practical tools and guides to help you prepare, organize next steps, and request a consultation.",
  path: "/resources",
});

const tools = [
  {
    key: "fit-check",
    title: "Guided Fit Check",
    description: "A brief, non-diagnostic guide to help determine next steps.",
    href: "/start-here/fit-check",
  },
  {
    key: "prepare-checklist",
    title: "Prepare for a Consultation",
    description:
      "A checklist to organize what you'd like help with and practical logistics.",
    href: "/start-here/prepare",
  },
  {
    key: "care-navigation-planner",
    title: "Care Navigation Planner",
    description:
      "A structured way to organize priorities, questions, and next steps when care feels complex.",
    href: "/services/care-navigation/planner",
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Practical tools designed to help you prepare, clarify next steps, and reduce overwhelm."
        primaryAction={{ label: "Request a Consultation", href: "/start-here" }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      />

      {/* Suggested Order */}
      <Section background="muted">
        <div className="max-w-3xl">
          <Callout variant="info" title="Suggested order">
            <p className="mb-3 text-foreground/80">
              If you&apos;re not sure where to start, we recommend this order:
            </p>
            <ol className="space-y-2 text-foreground/80">
              <li className="flex gap-2">
                <span className="font-semibold text-accent">1.</span>
                <SiteLink href="/start-here/fit-check" variant="primary">
                  <strong>Fit Check</strong>
                </SiteLink>
                {" "}— Determine if this practice is a good fit
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-accent">2.</span>
                <SiteLink href="/start-here/prepare" variant="primary">
                  <strong>Prepare Checklist</strong>
                </SiteLink>
                {" "}— Organize your thoughts and questions
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-accent">3.</span>
                <SiteLink href="/services/care-navigation/planner" variant="primary">
                  <strong>Care Navigation Planner</strong>
                </SiteLink>
                {" "}— If care feels complex, use this to organize priorities
              </li>
            </ol>
          </Callout>
        </div>
      </Section>

      {/* Tools Grid */}
      <Section
        title="Tools"
        description="Self-guided resources to help you prepare and organize."
        background="default"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = toolIcons[tool.key];
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block h-full transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Card title={tool.title}>
                  {Icon && (
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  )}
                  <p className="text-muted-foreground">{tool.description}</p>
                  <p className="mt-3 text-sm font-medium text-accent group-hover:underline">
                    Access tool →
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Notes / Boundaries */}
      <Section background="default">
        <div className="max-w-3xl space-y-4">
          <div className="rounded-2xl border border-border bg-muted p-6">
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              Important notes
            </h2>
            <p className="text-foreground/80">
              These tools do not provide diagnosis or emergency services. They are
              designed to help you prepare and organize information for your
              consultation.
            </p>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="mb-3 text-lg font-semibold text-red-900">
              Crisis support
            </h2>
            <p className="text-slate-700">
              If you are in immediate danger, call <strong>911</strong>. In the
              U.S., you can call or text <strong>988</strong> for crisis support.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

