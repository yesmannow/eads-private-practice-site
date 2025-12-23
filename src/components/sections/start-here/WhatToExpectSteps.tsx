"use client";

import { Card } from "../../ui/card";
import { Section } from "../../ui/section";
import { stepIcons } from "@/lib/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";

const steps = [
  {
    title: "Initial contact",
    iconKey: "initial-contact",
    detail:
      "Send a brief message through the contact form. Please avoid sensitive clinical details.",
  },
  {
    title: "Consultation (placeholder 10–20 minutes)",
    iconKey: "consultation",
    detail:
      "We review goals, clinical fit, and logistics (format, scheduling, fees).",
  },
  {
    title: "First appointment",
    iconKey: "first-appointment",
    detail:
      "If appropriate, we identify a treatment focus and begin skill-building and support.",
  },
];

export function WhatToExpectSteps() {
  return (
    <Section
      eyebrow="What to expect"
      title="What to expect"
      description="A clear, structured process to get started"
    >
      <Stagger as="ol" className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.iconKey ? stepIcons[step.iconKey] : undefined;
          return (
            <Reveal key={step.title} as="li" variant="cardIn">
              <Card title={`${index + 1}. ${step.title}`} icon={Icon}>
                <p>{step.detail}</p>
              </Card>
            </Reveal>
          );
        })}
      </Stagger>
      <p className="mt-6 text-sm text-slate-600">
        Not an emergency service. If you are in immediate danger, call 911. In the U.S., call/text 988.
      </p>
    </Section>
  );
}

