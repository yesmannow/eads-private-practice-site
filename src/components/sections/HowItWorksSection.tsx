"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Section } from "../ui/section";
import { staggerContainer, fadeUp, standardTransition, viewportOnce } from "@/lib/motion";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="process"
      title="A structured process to get started"
      description="Expect clear steps, transparent communication, and a calm pace so you understand what comes next."
      background="muted"
    >
      {shouldReduceMotion ? (
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
      ) : (
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp} transition={standardTransition}>
              <Card
                eyebrow={`Step ${index + 1}`}
                title={step.title}
              >
                <p className="leading-7 text-slate-800">{step.body}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
        <Button href="/start-here">Request a Consultation</Button>
        <Button href="/fees-faq" variant="secondary">
          Fees & FAQs
        </Button>
      </div>
    </Section>
  );
}
