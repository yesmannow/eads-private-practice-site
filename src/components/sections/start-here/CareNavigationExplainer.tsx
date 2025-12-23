import Image from "next/image";
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
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <ul className="space-y-3 text-foreground/80">
            {careNavigationPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/services">Learn more about services</Button>
            <Button href="/services/care-navigation/planner" variant="secondary">
              Use the Care Navigation Planner
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-secondary/40 shadow-lg">
          <Image
            src="/images/design-images/wooden-figures-1007134_1280.jpg"
            alt="Wooden figures arranged in a supportive pose"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </div>
    </Section>
  );
}

