import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

const dbtSkills = [
  {
    title: "Mindfulness",
    description: "Attention and awareness practices to increase present-moment engagement and reduce automatic reactivity.",
  },
  {
    title: "Distress tolerance",
    description: "Managing crisis urges and acute stress through practical strategies that help you get through difficult moments without making things worse.",
  },
  {
    title: "Emotion regulation",
    description: "Naming emotions accurately and changing vulnerability factors to reduce emotional intensity and improve functioning.",
  },
  {
    title: "Interpersonal effectiveness",
    description: "Boundaries and communication skills to improve relationships while maintaining self-respect and meeting your needs.",
  },
];

export function DBTSkillsSection() {
  return (
    <Section
      eyebrow="Skills training"
      title="DBT-informed skills"
      description="Informed by DBT skills training, adapted for individual therapy based on needs and fit."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {dbtSkills.map((skill) => (
          <Card key={skill.title} title={skill.title}>
            <p>{skill.description}</p>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-600">
        DBT-informed skills can be integrated into individual therapy based on needs and fit.
      </p>
    </Section>
  );
}

