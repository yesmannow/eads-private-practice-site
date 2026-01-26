import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export function PoliciesCard() {
  return (
    <Section
      eyebrow="Policies"
      title="Cancellation and attendance"
    >
      <Card title="Cancellation policy">
        <p className="mb-3 leading-7 text-slate-800">
          Cancellations require 24 hours&apos; notice to avoid a late-cancel fee (placeholder). Please contact as soon as possible if you need to reschedule.
        </p>
        <p className="leading-7 text-slate-800">
          Late cancellations and no-shows may be subject to a fee (placeholder). Exceptions may be made for emergencies or illness.
        </p>
      </Card>
    </Section>
  );
}

