import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ConsultPrepContainer } from "@/components/tools/consult-prep/ConsultPrepContainer";

export const metadata: Metadata = createMetadata({
  title: "Prepare for a Consultation",
  description: "A simple checklist to help you prepare for an initial consultation.",
  path: "/start-here/prepare",
});

export default function PreparePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Prepare for a Consultation
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              You don&apos;t need to have everything figured out. This checklist can help you organize
              your thoughts before reaching out.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact">Contact</Button>
              <Button href="/start-here" variant="secondary">
                Start Here
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <Section id="checklist" background="muted">
        <ConsultPrepContainer />
      </Section>
    </>
  );
}

