import type { Metadata } from "next";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/metadata";
import { getSiteJsonLd } from "@/lib/structured-data";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { ApproachTeaserSection } from "@/components/sections/ApproachTeaserSection";
import { FinalCtaBandSection } from "@/components/sections/FinalCtaBandSection";
import { FitChecklistSection } from "@/components/sections/FitChecklistSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LogisticsStripSection } from "@/components/sections/LogisticsStripSection";
import { ServicesSnapshotSection } from "@/components/sections/ServicesSnapshotSection";

export const metadata: Metadata = createMetadata({
  title: site.name,
  description: site.tagline,
  path: "/",
});

export default function Home() {
  const siteJsonLd = getSiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
      <HeroSection />
      <FitChecklistSection />
      <ServicesSnapshotSection />
      <HowItWorksSection />
      <ApproachTeaserSection />
      <AboutTeaserSection />
      <LogisticsStripSection />
      <FinalCtaBandSection />
    </>
  );
}
