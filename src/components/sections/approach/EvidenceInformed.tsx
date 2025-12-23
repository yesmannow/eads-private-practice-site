import { Section } from "../../ui/section";

const points = [
  "Clear goals and treatment focus",
  "Skills practice and real-world application",
  "Progress check-ins and adjustments",
  "Tailored pacing and priorities",
  "Coordination planning when care navigation is part of services",
];

export function EvidenceInformed() {
  return (
    <Section
      eyebrow="Foundation"
      title="What evidence-informed care means"
      description="Approaches are based on established research and clinical best practices, adapted to the individual."
      background="muted"
    >
      <ul className="space-y-3 text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

