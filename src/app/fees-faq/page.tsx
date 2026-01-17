import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getFAQJsonLd } from "@/lib/structured-data";
import { FAQSection } from "@/components/sections/fees-faq/FAQSection";
import { FeesCard } from "@/components/sections/fees-faq/FeesCard";
import { FeesFaqFinalCTA } from "@/components/sections/fees-faq/FeesFaqFinalCTA";
import { FeesFaqHero } from "@/components/sections/fees-faq/FeesFaqHero";
import { InsuranceCard } from "@/components/sections/fees-faq/InsuranceCard";
import { PoliciesCard } from "@/components/sections/fees-faq/PoliciesCard";
import { TelehealthLocationCard } from "@/components/sections/fees-faq/TelehealthLocationCard";
import { getContentCollection, type FAQ } from "@/lib/content";

export const metadata: Metadata = createMetadata({
  title: "Fees & FAQs | Therapy in Bloomington, IN",
  description: "Therapy fees, insurance information, telehealth details, and frequently asked questions for counseling services in Bloomington, Indiana.",
  path: "/fees-faq",
});

export default async function FeesFaq() {
  // Load FAQs from content files
  const faqs = await getContentCollection<FAQ>('faqs', 'order', 'asc').catch(() => []);

  // Convert to format expected by components (if needed)
  const faqsForComponents = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer.replace(/<[^>]*>/g, ''), // Strip HTML for structured data if needed
  }));

  const faqJsonLd = getFAQJsonLd(faqsForComponents);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FeesFaqHero />
      <FeesCard />
      <InsuranceCard />
      <TelehealthLocationCard />
      <PoliciesCard />
      <FAQSection />
      <FeesFaqFinalCTA />
    </>
  );
}
