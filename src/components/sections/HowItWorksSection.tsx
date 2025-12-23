import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Section } from "../ui/section";

const steps = [
  {
    title: "Initial contact",
    body: "Send a brief message through the contact form (avoid sensitive clinical details).",
  },
  {
    title: "Consultation",
    body: "We review goals, clinical fit, and logistics (telehealth/in-person, scheduling, fees).",
  },
  {
    title: "Care plan",
    body: "If appropriate, we establish a treatment focus and begin skill-building and support.",
  },
];

export function HowItWorksSection() {
  return (
    <Section
      id="process"
      title="A structured process to get started"
      description="Expect clear steps, transparent communication, and a calm pace so you understand what comes next."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            eyebrow={`Step ${index + 1}`}
            title={step.title}
          >
            <p className="leading-7 text-slate-800">{step.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
        <Button href="/start-here">Request a Consultation</Button>
        <Button href="/fees-faq" variant="secondary">
          Fees & FAQs
        </Button>
      </div>
    </Section>
  );
}
