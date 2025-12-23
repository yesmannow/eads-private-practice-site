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

export const metadata: Metadata = createMetadata({
  title: "Fees & FAQs",
  description: "Fees, insurance, telehealth details, and common questions.",
  path: "/fees-faq",
});

const faqs = [
  {
    question: "Do you offer a consultation?",
    answer:
      "Yes. A brief consultation (10–20 minutes, placeholder) is available to discuss fit, goals, and logistics before scheduling a first appointment. This helps ensure we're a good match and you have all the information you need.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Standard sessions are 50–55 minutes (placeholder). Session length and pacing can be discussed based on your needs and preferences.",
  },
  {
    question: "How often do we meet?",
    answer:
      "Frequency is typically weekly or bi-weekly, depending on your goals and needs. This will be discussed during the consultation and can be adjusted over time.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Insurance status will be confirmed during consultation. If you are using insurance, please verify your out-of-network benefits with your provider. Superbills are available upon request (placeholder) for potential reimbursement.",
  },
  {
    question: "Can I get a superbill?",
    answer:
      "Yes. Superbills are available upon request (placeholder) and can be submitted to your insurance for potential out-of-network reimbursement, depending on your plan's benefits.",
  },
  {
    question: "Do you offer telehealth?",
    answer:
      "Yes. Telehealth is available across Indiana. Clients must be located in Indiana at the time of the session. In-person sessions may be available in Bloomington (placeholder if applicable).",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "The first session focuses on understanding your goals, reviewing logistics (format, scheduling, fees), and establishing a treatment focus if appropriate. You'll have time to ask questions and we'll work together to create a plan.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer:
      "During the consultation, we'll discuss your needs and goals to determine whether individual therapy, caregiver support, or care navigation is the best fit. Many clients benefit from a combination of services.",
  },
  {
    question: "What about emergencies or crisis?",
    answer:
      "This practice is not an emergency service. If you are in immediate danger, call 911. In the U.S., you can call or text 988 for crisis support. If you need crisis services, court-mandated treatment, or intensive psychiatric care, referrals can be provided when appropriate.",
  },
];

export default function FeesFaq() {
  const faqJsonLd = getFAQJsonLd(faqs);

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
