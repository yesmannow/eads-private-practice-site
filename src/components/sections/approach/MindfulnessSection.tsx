import { Section } from "../../ui/section";

const mindfulnessPoints = [
  "Noticing thoughts and emotions without escalation",
  "Grounding during stress and overwhelm",
  "Improving attention and present-moment engagement",
  "Reducing automatic reactivity",
];

export function MindfulnessSection() {
  return (
    <Section
      eyebrow="Practical tools"
      title="Mindfulness-based strategies"
      description="Practical regulation tools for managing stress and improving emotional awareness."
    >
      <ul className="space-y-3 text-slate-700">
        {mindfulnessPoints.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

