import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

const steps = [
  {
    title: "Initial contact",
    detail:
      "Send a brief message through the contact form. Please avoid sensitive clinical details.",
  },
  {
    title: "Consultation (placeholder 10–20 minutes)",
    detail:
      "We review goals, clinical fit, and logistics (format, scheduling, fees).",
  },
  {
    title: "First appointment",
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
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title}>
            <Card title={`${index + 1}. ${step.title}`}>
              <p>{step.detail}</p>
            </Card>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-slate-600">
        Not an emergency service. If you are in immediate danger, call 911. In the U.S., call/text 988.
      </p>
    </Section>
  );
}

