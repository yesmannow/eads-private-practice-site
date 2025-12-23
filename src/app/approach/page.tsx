import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ACTSection } from "@/components/sections/approach/ACTSection";
import { ApproachFinalCTA } from "@/components/sections/approach/ApproachFinalCTA";
import { ApproachHero } from "@/components/sections/approach/ApproachHero";
import { DBTSkillsSection } from "@/components/sections/approach/DBTSkillsSection";
import { EvidenceInformed } from "@/components/sections/approach/EvidenceInformed";
import { MindfulnessSection } from "@/components/sections/approach/MindfulnessSection";
import { ProgressTracking } from "@/components/sections/approach/ProgressTracking";
import { SessionsLike } from "@/components/sections/approach/SessionsLike";

export const metadata: Metadata = createMetadata({
  title: "Approach",
  description:
    "Evidence-informed, skills-based care including ACT-informed therapy, DBT-informed skills, and mindfulness-based strategies.",
  path: "/approach",
});

export default function Approach() {
  return (
    <>
      <ApproachHero />
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
