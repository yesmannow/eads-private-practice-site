import Image from "next/image";
import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

const sessionPoints = [
  {
    title: "Collaborative and structured",
    description: "Sessions follow a clear structure while remaining flexible to address immediate needs and priorities.",
  },
  {
    title: "Goal-oriented",
    description: "Short- and medium-term targets are identified and reviewed regularly to ensure progress and alignment.",
  },
  {
    title: "Skills practice and application",
    description: "Between-session application of skills and strategies to build real-world capacity and confidence.",
  },
  {
    title: "Review and refine",
    description: "Regular progress review and plan refinement based on what's working and what needs adjustment.",
  },
  {
    title: "Care navigation planning",
    description: "When applicable, coordination planning and resource coordination to support comprehensive care.",
  },
];

export function SessionsLike() {
  return (
    <Section
      eyebrow="Process"
      title="What sessions are like"
      background="muted"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {sessionPoints.map((point) => (
            <Card key={point.title} title={point.title}>
              <p>{point.description}</p>
            </Card>
          ))}
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src="/images/design-images/therapy-for-growth-and-healing-9850351_1280.jpg"
            alt="Therapeutic growth and healing representation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}

