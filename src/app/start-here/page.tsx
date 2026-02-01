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
import { IconFitCheck, IconPrepare } from "@/lib/icons";

export const metadata: Metadata = createMetadata({
  title: "Request a Therapy Consultation in Bloomington, Indiana",
  description: "Start your therapy journey in Bloomington, IN. Confirm fit, understand the process, and request a consultation with a licensed social worker.",
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
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                    <IconFitCheck className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <SiteLink href="/start-here/fit-check" variant="primary">
                      <strong>Fit Check</strong>
                    </SiteLink>
                    {" "}— A brief guide to help determine next steps
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                    <IconPrepare className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <SiteLink href="/start-here/prepare" variant="primary">
                      <strong>Prepare Checklist</strong>
                    </SiteLink>
                    {" "}— Organize what you&apos;d like help with and practical logistics
                  </div>
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
