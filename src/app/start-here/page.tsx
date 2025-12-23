import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { CareNavigationExplainer } from "@/components/sections/start-here/CareNavigationExplainer";
import { CommonReasons } from "@/components/sections/start-here/CommonReasons";
import { HowToPrepare } from "@/components/sections/start-here/HowToPrepare";
import { ImportantNotes } from "@/components/sections/start-here/ImportantNotes";
import { StartHereFinalCTA } from "@/components/sections/start-here/StartHereFinalCTA";
import { StartHereHero } from "@/components/sections/start-here/StartHereHero";
import { WhatToExpectSteps } from "@/components/sections/start-here/WhatToExpectSteps";

export const metadata: Metadata = createMetadata({
  title: "Start Here",
  description: "Confirm fit, understand the process, and request a consultation.",
  path: "/start-here",
});

export default function StartHere() {
  return (
    <>
      <StartHereHero />
      <CommonReasons />
      <WhatToExpectSteps />
      <HowToPrepare />
      <CareNavigationExplainer />
      <ImportantNotes />
      <StartHereFinalCTA />
    </>
  );
}
