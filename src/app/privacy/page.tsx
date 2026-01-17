import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { AccessibilitySection } from "@/components/sections/privacy/AccessibilitySection";
import { PrivacyHero } from "@/components/sections/privacy/PrivacyHero";
import { PrivacySection } from "@/components/sections/privacy/PrivacySection";
import { TermsSection } from "@/components/sections/privacy/TermsSection";
import { getContentFile, type PrivacyPolicyContent } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const privacyContent = await getContentFile<PrivacyPolicyContent>('privacy-policy.json').catch(() => null);
  return createMetadata({
    title: privacyContent?.title || "Privacy",
    description: privacyContent?.hero.subtitle || "Privacy, terms, and accessibility information.",
    path: "/privacy",
  });
}

export default async function Privacy() {
  const privacyContent = await getContentFile<PrivacyPolicyContent>('privacy-policy.json').catch(() => null);

  // Fallback content if file doesn't exist
  const content = privacyContent || {
    title: "Privacy Policy",
    hero: {
      title: "Privacy",
      subtitle: "Privacy, terms, and accessibility information.",
    },
    privacySection: {
      title: "Privacy information",
      informationCollection: {
        title: "Information collection",
        paragraphs: [{ text: "<p>This website collects minimal technical data needed to operate and secure the site.</p>" }],
      },
      cookiesAnalytics: {
        title: "Cookies and analytics",
        paragraphs: [{ text: "<p>This site does not use cookies or analytics tracking.</p>" }],
      },
      telehealthCommunication: {
        title: "Telehealth and communication",
        content: "<p>Telehealth services follow HIPAA-aligned practices with secure video platforms.</p>",
      },
    },
    termsSection: {
      title: "Terms of use",
      content: "<p>The information on this site is for educational and scheduling purposes only.</p>",
    },
    accessibilitySection: {
      title: "Accessibility commitment",
      content: "<p>This site is designed with accessibility in mind.</p>",
    },
  };

  return (
    <>
      <PrivacyHero title={content.hero.title} subtitle={content.hero.subtitle} />
      <PrivacySection
        title={content.privacySection.title}
        informationCollection={content.privacySection.informationCollection}
        cookiesAnalytics={content.privacySection.cookiesAnalytics}
        telehealthCommunication={content.privacySection.telehealthCommunication}
      />
      <TermsSection
        title={content.termsSection.title}
        content={content.termsSection.content}
      />
      <AccessibilitySection
        title={content.accessibilitySection.title}
        content={content.accessibilitySection.content}
      />
    </>
  );
}
