"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Section } from "../ui/section";
import { serviceIcons } from "@/lib/icons";
import { staggerContainer, fadeUp, standardTransition, viewportOnce } from "@/lib/motion";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="services"
      title="Clinical services"
      description="Therapy and care navigation focused on measurable progress, practical skills, and coordination support."
    >
      {shouldReduceMotion ? (
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.key];
            return (
              <Card
                key={service.title}
                title={service.title}
                footer={
                  <Button href="/services" variant="secondary" className="w-full justify-center">
                    Learn more
                  </Button>
                }
              >
                {Icon && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                )}
                <p className="leading-7 text-card-foreground">{service.body}</p>
              </Card>
            );
          })}
        </div>
      ) : (
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.key];
            return (
              <motion.div key={service.title} variants={fadeUp} transition={standardTransition}>
                <Card
                  title={service.title}
                  footer={
                    <Button href="/services" variant="secondary" className="w-full justify-center">
                      Learn more
                    </Button>
                  }
                >
                  {Icon && (
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  )}
                  <p className="leading-7 text-card-foreground">{service.body}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </Section>
  );
}
