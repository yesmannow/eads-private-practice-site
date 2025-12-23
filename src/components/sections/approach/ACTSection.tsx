import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

const actPoints = [
  {
    title: "Clarifying values and direction",
    description: "Identifying what matters most and aligning actions with personal values.",
  },
  {
    title: "Identifying unhelpful patterns",
    description: "Recognizing avoidance, rumination, and other patterns that interfere with valued living.",
  },
  {
    title: "Building willingness and tolerance",
    description: "Developing capacity to experience difficult emotions without being controlled by them.",
  },
  {
    title: "Committed action",
    description: "Taking small, meaningful steps aligned with goals and values, even when stress persists.",
  },
];

export function ACTSection() {
  return (
    <Section
      eyebrow="Therapy approach"
      title="ACT-informed therapy (Acceptance and Commitment Therapy)"
      description="Focus on values, psychological flexibility, and building a workable plan even when stress persists."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {actPoints.map((point) => (
          <Card key={point.title} title={point.title}>
            <p>{point.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

