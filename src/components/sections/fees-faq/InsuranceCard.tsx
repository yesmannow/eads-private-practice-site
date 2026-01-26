import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export function InsuranceCard() {
  return (
    <Section
      eyebrow="Insurance"
      title="Insurance and payment"
    >
      <Card title="Insurance status">
        <p className="leading-7 text-slate-800">
          Insurance status will be confirmed during consultation. If you are using insurance, please verify your out-of-network benefits with your provider.
        </p>
        <p className="mt-4 leading-7 text-slate-800">
          For self-pay clients, superbills are available upon request (placeholder) and can be submitted to your insurance for potential reimbursement, depending on your plan&apos;s out-of-network benefits.
        </p>
      </Card>
    </Section>
  );
}

