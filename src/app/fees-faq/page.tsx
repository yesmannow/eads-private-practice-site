import { CTAButton } from "@/components/CTAButton";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";
import { primaryCtaHref, secondaryCtaHref } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees & FAQ",
  description:
    "Fee, insurance, cancellation, superbill, and telehealth policies for counseling services.",
};

const faqs = [
  {
    question: "What is the session fee?",
    answer:
      "Standard 50-minute session rates are shared during the consultation so you have full context on scheduling and availability. A limited number of sliding-scale spots may be available; please ask during our consultation.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I am an out-of-network provider and do not bill insurance directly. I can provide a superbill you may submit to your insurer if they offer reimbursement.",
  },
  {
    question: "Can I receive a superbill?",
    answer:
      "Yes. Superbill statements include the information most insurers request. Please confirm your out-of-network benefits with your insurance plan.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations or reschedules require 24 hours’ notice to avoid a late-cancel fee. I will always communicate promptly about any schedule changes.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Standard sessions are 50 minutes. We will discuss pacing and break times as needed to support accessibility and focus.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Adults and older teens located in Indiana. Telehealth clients must physically be in Indiana during sessions. In-person appointments in Bloomington are offered when available.",
  },
];

export default function FeesFaq() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
              Fees & FAQ
            </p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Clear, transparent policies
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              I value clarity around fees, scheduling, and boundaries. If you have questions not listed
              here, please ask—I want you to feel informed.
            </p>
            <div className="flex gap-3">
              <CTAButton href={primaryCtaHref}>Request a consultation</CTAButton>
              <CTAButton variant="secondary" href={secondaryCtaHref}>
                Contact
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <Section background="muted" eyebrow="Details" title="Policies at a glance">
        <FAQAccordion items={faqs} />
        <p className="text-sm text-slate-600">
          This practice is not a crisis service. If you are in immediate danger call 911; in the U.S.
          you can call or text 988.
        </p>
      </Section>
    </>
  );
}
