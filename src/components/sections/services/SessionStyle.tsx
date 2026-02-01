import Image from "next/image";
import { Section } from "../../ui/section";

const sessionPoints = [
  "Collaborative, structured conversations",
  "Goal-setting and treatment focus",
  "Skills practice and real-world application",
  "Progress check-ins and adjustments over time",
  "Coordination planning when care navigation is involved",
];

export function SessionStyle() {
  return (
    <Section
      eyebrow="Process"
      title="What sessions are like"
      background="muted"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <ul className="space-y-3 text-slate-700">
            {sessionPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src="/images/design-images/building-blocks-456617_1280.jpg"
            alt="Building blocks representing structured therapeutic process"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}

