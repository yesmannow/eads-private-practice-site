import { Button } from "../ui/button";
import { Section } from "../ui/section";

export function LogisticsStripSection() {
  return (
    <Section
      id="logistics"
      title="Practical details"
      background="muted"
    >
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="space-y-2 text-slate-800">
          <p>Bloomington, IN</p>
          <p>Telehealth across Indiana</p>
          <p>Session length: 50–55 minutes</p>
        </div>
        <div className="space-y-2 text-slate-800">
          <p>By appointment</p>
          <p>Fees and insurance details on Fees & FAQs</p>
          <p>Cancellation policy listed on Fees & FAQs</p>
        </div>
      </div>
      <Button href="/fees-faq" variant="secondary">
        Fees & FAQs
      </Button>
    </Section>
  );
}
