import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export function AboutCredentials() {
  return (
    <Section
      eyebrow="Background"
      title="Credentials and experience"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Education">
          <p className="leading-7 text-slate-800">
            Master's-level clinical training with a focus on evidence-informed practice. Continuing education in trauma-informed care, ACT-informed therapy, DBT-informed skills, and mindfulness-based strategies.
          </p>
        </Card>
        <Card title="Clinical interests">
          <ul className="space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-900" aria-hidden />
              <span>ACT-informed therapy</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-900" aria-hidden />
              <span>DBT-informed skills</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-900" aria-hidden />
              <span>Mindfulness-based strategies</span>
            </li>
          </ul>
        </Card>
        <Card title="Care navigation experience">
          <p className="leading-7 text-slate-800">
            Experience in care coordination, resource identification, and supporting individuals and families navigating complex health and mental health systems. Care navigation is offered as a core service, not an add-on.
          </p>
        </Card>
      </div>
    </Section>
  );
}

