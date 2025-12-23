import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { FAQSection } from "@/components/sections/fees-faq/FAQSection";
import { FeesCard } from "@/components/sections/fees-faq/FeesCard";
import { FeesFaqFinalCTA } from "@/components/sections/fees-faq/FeesFaqFinalCTA";
import { FeesFaqHero } from "@/components/sections/fees-faq/FeesFaqHero";
import { InsuranceCard } from "@/components/sections/fees-faq/InsuranceCard";
import { PoliciesCard } from "@/components/sections/fees-faq/PoliciesCard";
import { TelehealthLocationCard } from "@/components/sections/fees-faq/TelehealthLocationCard";

export const metadata: Metadata = createMetadata({
  title: "Fees & FAQs",
  description: "Fees, insurance, telehealth details, and common questions.",
  path: "/fees-faq",
});

export default function FeesFaq() {
  return (
    <>
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
