"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Section } from "../ui/section";
import { serviceIcons } from "@/lib/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const services = [
  {
    key: "individual-therapy",
    title: "Individual Therapy",
    body: "Evidence-informed psychotherapy for anxiety, depression, stress, and life transitions.",
  },
  {
    key: "caregiver-support",
    title: "Caregiver Support",
    body: "Support for caregivers coping with role strain, uncertainty, grief, and sustained demands.",
  },
  {
    key: "care-navigation",
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
      <Stagger className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.key];
          return (
            <Reveal key={service.title} variant="cardIn">
              <Card
                title={service.title}
                icon={Icon}
                footer={
                  <Button href="/services" variant="secondary" className="w-full justify-center">
                    Learn more
                  </Button>
                }
              >
                <p className="leading-7 text-card-foreground">{service.body}</p>
              </Card>
            </Reveal>
          );
        })}
      </Stagger>
    </Section>
  );
}
