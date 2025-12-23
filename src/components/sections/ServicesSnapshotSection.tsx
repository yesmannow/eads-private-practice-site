import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Section } from "../ui/section";

const services = [
  {
    title: "Individual Therapy",
    body: "Evidence-informed psychotherapy for anxiety, depression, stress, and life transitions.",
  },
  {
    title: "Caregiver Support",
    body: "Support for caregivers coping with role strain, uncertainty, grief, and sustained demands.",
  },
  {
    title: "Care Navigation",
    body: "Guidance coordinating care, resources, and next steps when systems feel complex or overwhelming.",
  },
];

export function ServicesSnapshotSection() {
  return (
    <Section
      id="services"
      title="Clinical services"
      description="Therapy and care navigation focused on measurable progress, practical skills, and coordination support."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            footer={
              <Button href="/services" variant="secondary" className="w-full justify-center">
                Learn more
              </Button>
            }
          >
            <p className="leading-7 text-slate-800">{service.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
