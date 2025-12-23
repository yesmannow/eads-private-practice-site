import { Section } from "../../ui/section";

const trackingPoints = [
  "Symptom and functional check-ins",
  "Goal review and adjustment",
  "Adjusting frequency and focus as needed",
];

export function ProgressTracking() {
  return (
    <Section
      eyebrow="Measurement"
      title="Tracking progress"
      description="Regular check-ins help ensure the approach is working and allow for adjustments based on functional goals and progress."
    >
      <ul className="space-y-3 text-slate-700">
        {trackingPoints.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

