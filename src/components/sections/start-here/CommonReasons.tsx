import { Section } from "../../ui/section";

const reasons = [
  "Anxiety, persistent stress, or overwhelm",
  "Depressive symptoms, low motivation, disconnection",
  "Adjustment to medical diagnoses or health-related change",
  "Caregiver burden and burnout",
  "Life transitions (work, relationships, identity, relocation)",
  "Need for practical coping skills and care planning",
];

export function CommonReasons() {
  return (
    <Section
      eyebrow="Common reasons"
      title="Common reasons people reach out"
      background="muted"
    >
      <ul className="space-y-3 text-slate-700">
        {reasons.map((reason) => (
          <li key={reason} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

