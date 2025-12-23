import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Callout, PageHero, Section, SiteLink } from "@/components/ui";
import { CareNavigationExplainer } from "@/components/sections/start-here/CareNavigationExplainer";
import { CommonReasons } from "@/components/sections/start-here/CommonReasons";
import { HowToPrepare } from "@/components/sections/start-here/HowToPrepare";
import { ImportantNotes } from "@/components/sections/start-here/ImportantNotes";
import { StartHereFinalCTA } from "@/components/sections/start-here/StartHereFinalCTA";
import { WhatToExpectSteps } from "@/components/sections/start-here/WhatToExpectSteps";
import { MotionSection } from "@/components/motion/MotionSection";

export const metadata: Metadata = createMetadata({
  title: "Start Here",
  description: "Confirm fit, understand the process, and request a consultation.",
  path: "/start-here",
});

export default function StartHere() {
  return (
    <>
      <MotionSection as="div">
        <PageHero
          title="Start Here"
          description="A brief overview of fit, what to expect, and how to request a consultation."
          primaryAction={{ label: "Request a Consultation", href: "/contact" }}
          secondaryAction={{ label: "View Fees & FAQs", href: "/fees-faq" }}
        />
      </MotionSection>
      <MotionSection as="div">
        <Section background="muted">
          <div className="max-w-3xl">
            <Callout variant="info" title="You can start with either">
              <p className="mb-3 text-foreground/80">
                Choose the path that feels right for you:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <SiteLink href="/start-here/fit-check" variant="primary">
                    <strong>Fit Check</strong>
                  </SiteLink>
                  {" "}— A brief guide to help determine next steps
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <SiteLink href="/start-here/prepare" variant="primary">
                    <strong>Prepare Checklist</strong>
                  </SiteLink>
                  {" "}— Organize what you&apos;d like help with and practical logistics
                </li>
              </ul>
            </Callout>
          </div>
        </Section>
      </MotionSection>
      <CommonReasons />
      <WhatToExpectSteps />
      <HowToPrepare />
      <CareNavigationExplainer />
      <ImportantNotes />
      <StartHereFinalCTA />
    </>
  );
}
