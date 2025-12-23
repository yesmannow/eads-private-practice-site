import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Section } from "../ui/section";

const approaches = [
  {
    title: "ACT-informed",
    body: "Clarify values and build psychological flexibility to move forward under stress.",
  },
  {
    title: "DBT-informed skills",
    body: "Practical strategies for emotion regulation, distress tolerance, and interpersonal effectiveness.",
  },
  {
    title: "Mindfulness-based skills",
    body: "Attention and awareness practices to improve regulation and reduce reactivity.",
  },
];

export function ApproachTeaserSection() {
  return (
    <Section
      id="approach"
      title="Evidence-informed, skills-based care"
      description="Care is collaborative and goal-oriented. Sessions focus on symptom reduction, coping skills, and values-based behavior change, tailored to your situation."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src="/images/design-images/sea-2563389_1280.jpg"
            alt="Calming ocean scene representing therapeutic support"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {approaches.map((item) => (
              <Card key={item.title} title={item.title}>
                <p className="leading-7 text-slate-800">{item.body}</p>
              </Card>
            ))}
          </div>
          <Button href="/approach" variant="secondary">
            Learn about the approach
          </Button>
        </div>
      </div>
    </Section>
  );
}
