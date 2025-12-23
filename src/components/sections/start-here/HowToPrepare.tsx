import { Section } from "../../ui/section";

const preparationItems = [
  "Your general goals (1–2 sentences)",
  "Preferred format (telehealth vs in-person)",
  "Availability windows",
  "Questions about fees/insurance",
  "Whether you're seeking therapy, caregiver support, or care navigation",
];

export function HowToPrepare() {
  return (
    <Section
      eyebrow="Prepare"
      title="How to prepare"
      description="A few details that help us start with clarity"
      background="muted"
    >
      <ul className="space-y-3 text-slate-700">
        {preparationItems.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

