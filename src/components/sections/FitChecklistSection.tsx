import { Button } from "../ui/button";
import { Section } from "../ui/section";

const checklistItems = [
  "Caregiver stress and burnout",
  "Anxiety that interferes with daily functioning",
  "Adjustment to medical diagnoses (self or family)",
  "Major life transitions (work, family, identity, relocation)",
  "Depressive symptoms, low motivation, disconnection",
  "Need for concrete coping skills and care planning",
];

export function FitChecklistSection() {
  return (
    <Section
      id="fit"
      title="Support for stress, adjustment, and caregiver burden."
      description="If you are experiencing persistent stress, anxiety, low mood, or difficulty adjusting to health-related changes, therapy can provide structured support and practical skills."
    >
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <ul className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
          {checklistItems.map((item) => (
            <li key={item} className="flex gap-3 text-slate-800">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-900 text-xs font-semibold text-white">
                ✓
              </span>
              <p className="leading-6">{item}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-800 shadow-inner">
          <p className="text-base leading-7">
            Treatment focuses on symptom relief, coping skills, and clear next steps. We will pace
            carefully, emphasize safety, and respect your goals and boundaries.
          </p>
          <div className="pt-6">
            <Button href="/start-here">Start Here</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
