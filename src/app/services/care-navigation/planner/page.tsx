import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { CareNavPlannerContainer } from "@/components/tools/care-navigation-planner/CareNavPlannerContainer";

export const metadata: Metadata = createMetadata({
  title: "Care Navigation Planner",
  description: "A simple tool to organize next steps, questions, and priorities when care feels complex.",
  path: "/services/care-navigation/planner",
});

export default function CareNavigationPlannerPage() {
  return (
    <>
      <Section
        id="planner"
        title="Care Navigation Planner"
        description="A simple tool to organize next steps, questions, and priorities when care feels complex."
        background="default"
      >
        <CareNavPlannerContainer />
      </Section>

      <Section id="important-notes" background="muted">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Important notes</h2>
          <div className="space-y-3 text-slate-700">
            <p>This tool does not provide diagnosis or treatment recommendations.</p>
            <p>Do not include sensitive clinical details.</p>
            <p>
              <strong className="font-semibold">Crisis boundary:</strong> If you are in immediate
              danger, call 911. In the U.S., call or text 988.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

