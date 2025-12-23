import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

const careNavigationPoints = [
  "Identifying appropriate services/resources",
  "Organizing next steps and follow-through",
  "Supporting caregiver planning and coordination",
  "Reducing overwhelm by structuring decisions",
];

export function CareNavigationExplainer() {
  return (
    <Section
      eyebrow="Core service"
      title="Care Navigation"
      description="Care navigation provides structured support coordinating next steps, resources, and communication when systems feel complex."
    >
      <ul className="space-y-3 text-slate-700">
        {careNavigationPoints.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button href="/services">Learn more about services</Button>
        <Button href="/services/care-navigation/planner" variant="secondary">
          Use the Care Navigation Planner
        </Button>
      </div>
    </Section>
  );
}

