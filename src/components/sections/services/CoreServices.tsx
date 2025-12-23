import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Section } from "../../ui/section";
import { serviceIcons } from "@/lib/icons";

const services = [
  {
    title: "Individual Therapy",
    iconKey: "individual-therapy",
    description:
      "Evidence-informed psychotherapy for anxiety, depression, stress, and life transitions. Sessions are collaborative and skills-based, with clear goals and practical between-session strategies.",
    focuses: [
      "Anxiety and stress",
      "Low mood",
      "Adjustment",
      "Coping skills",
      "Values-based change",
    ],
  },
  {
    title: "Caregiver Support",
    iconKey: "caregiver-support",
    description:
      "Support for caregiver stress, role strain, uncertainty, and sustained demands. Focus on coping, boundaries, communication, and sustainable planning.",
    focuses: [
      "Burnout",
      "Grief and uncertainty",
      "Boundaries",
      "Communication",
      "Self-care planning",
    ],
  },
  {
    title: "Care Navigation",
    iconKey: "care-navigation",
    description:
      "Structured support coordinating next steps, resources, and communication when systems feel complex. Designed to reduce overwhelm and improve follow-through.",
    focuses: [
      "Organizing next steps",
      "Resource identification",
      "Planning and coordination",
      "Decision support",
    ],
  },
];

export function CoreServices() {
  return (
    <Section
      eyebrow="Core services"
      title="Core services"
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.iconKey ? serviceIcons[service.iconKey] : null;
          return (
            <div key={service.title}>
              {Icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              )}
              <Card title={service.title}>
                <p className="mb-4 leading-7 text-foreground/80">{service.description}</p>
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">Common focuses:</p>
                  <ul className="space-y-2 text-foreground/80">
                    {service.focuses.map((focus) => (
                      <li key={focus} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                        <span className="text-sm">{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/start-here" variant="secondary" className="w-full sm:w-auto">
                    Start here
                  </Button>
                  {service.title === "Care Navigation" && (
                    <Button
                      href="/services/care-navigation/planner"
                      variant="ghost"
                      className="w-full sm:w-auto"
                    >
                      Use the Care Navigation Planner
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

