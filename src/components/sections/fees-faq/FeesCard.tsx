import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export function FeesCard() {
  return (
    <Section
      eyebrow="Fees"
      title="Session fees"
      background="muted"
    >
      <Card title="Session fee">
        <p className="mb-4 text-lg font-semibold text-slate-900">
          $150 per 50–55 minute session
        </p>
        <div className="space-y-3 text-slate-700">
          <div>
            <p className="font-semibold text-slate-900">Payment methods:</p>
            <p className="mt-1">Placeholder payment methods (e.g., credit card, HSA/FSA, check)</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Sliding scale:</p>
            <p className="mt-1">Limited availability (placeholder)</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Superbills:</p>
            <p className="mt-1">Available upon request (placeholder)</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}

