import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ACTSection } from "@/components/sections/approach/ACTSection";
import { ApproachFinalCTA } from "@/components/sections/approach/ApproachFinalCTA";
import { DBTSkillsSection } from "@/components/sections/approach/DBTSkillsSection";
import { EvidenceInformed } from "@/components/sections/approach/EvidenceInformed";
import { MindfulnessSection } from "@/components/sections/approach/MindfulnessSection";
import { ProgressTracking } from "@/components/sections/approach/ProgressTracking";
import { SessionsLike } from "@/components/sections/approach/SessionsLike";
import { ImageHero } from "@/components/ui";

export const metadata: Metadata = createMetadata({
  title: "Approach",
  description:
    "Evidence-informed, skills-based care including ACT-informed therapy, DBT-informed skills, and mindfulness-based strategies.",
  path: "/approach",
});

export default function Approach() {
  return (
    <>
      <ImageHero
        title="Approach"
        subtitle="Collaborative, evidence-informed care focused on coping skills, behavior change, and practical support."
        imageSrc="/images/section-heros/sand-dunes-7718479_1920.jpg"
        imageAlt="Sand dunes with soft light"
        primaryAction={{ label: "Request a Consultation", href: "/start-here" }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
        priority={false}
      />
      <EvidenceInformed />
      <ACTSection />
      <DBTSkillsSection />
      <MindfulnessSection />
      <SessionsLike />
      <ProgressTracking />
      <ApproachFinalCTA />
    </>
  );
}
