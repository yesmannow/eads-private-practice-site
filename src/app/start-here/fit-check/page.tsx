import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { FitCheckContainer } from "@/components/tools/fit-check/FitCheckContainer";

export const metadata: Metadata = createMetadata({
  title: "Is This the Right Place to Start?",
  description: "A brief, non-diagnostic guide to help determine next steps.",
  path: "/start-here/fit-check",
});

export default function FitCheckPage() {
  return (
    <Section
      id="fit-check"
      title="Is This the Right Place to Start?"
      description="A brief, non-diagnostic guide to help determine next steps."
      background="default"
    >
      <FitCheckContainer />
    </Section>
  );
}

