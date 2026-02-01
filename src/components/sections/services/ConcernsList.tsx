import { Section } from "../../ui/section";

const concerns = [
  "Persistent stress and overwhelm",
  "Anxiety symptoms affecting daily functioning",
  "Depressive symptoms and low motivation",
  "Adjustment to medical diagnoses or health-related changes",
  "Caregiver burden and burnout",
  "Life transitions (work, family, relationships, relocation)",
  "Coping skills for emotion regulation and distress",
  "Communication and boundary setting",
  "Care planning and coordination support",
];

export function ConcernsList() {
  return (
    <Section
      eyebrow="What I help with"
      title="Common concerns addressed"
      description="Services are tailored to individual goals and clinical fit."
    >
      <ul className="space-y-3 text-slate-700">
        {concerns.map((concern) => (
          <li key={concern} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{concern}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

