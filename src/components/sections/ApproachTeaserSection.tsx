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
      <div className="grid gap-6 md:grid-cols-3">
        {approaches.map((item) => (
          <Card key={item.title} title={item.title}>
            <p className="leading-7 text-slate-800">{item.body}</p>
          </Card>
        ))}
      </div>
      <Button href="/approach" variant="secondary">
        Learn about the approach
      </Button>
    </Section>
  );
}
