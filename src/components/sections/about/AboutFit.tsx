import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

const whoIWorkWith = [
  "Adults (placeholder)",
  "Caregivers managing stress, burnout, and role demands",
  "People navigating health-related changes and medical diagnoses",
  "Individuals seeking skills-based support for anxiety, depression, and life transitions",
];

export function AboutFit() {
  return (
    <Section
      eyebrow="Fit"
      title="Who I work with"
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Who I work with">
          <ul className="space-y-3 text-slate-700">
            {whoIWorkWith.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Not a fit">
          <p className="leading-7 text-slate-800">
            This practice may not be the right fit for crisis services, court-mandated treatment, or intensive psychiatric care. Referrals can be provided when appropriate.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            If you are in immediate danger, call 911. In the U.S., call or text 988 for crisis support.
          </p>
        </Card>
      </div>
    </Section>
  );
}

