import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { AccessibilitySection } from "@/components/sections/privacy/AccessibilitySection";
import { PrivacyHero } from "@/components/sections/privacy/PrivacyHero";
import { PrivacySection } from "@/components/sections/privacy/PrivacySection";
import { TermsSection } from "@/components/sections/privacy/TermsSection";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description: "Privacy, terms, and accessibility information.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <>
      <PrivacyHero />
      <PrivacySection />
      <TermsSection />
      <AccessibilitySection />
    </>
  );
}
