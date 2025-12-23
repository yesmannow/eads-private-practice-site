import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export function ContactFinalCTA() {
  return (
    <Section background="muted">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Button href="/start-here">Start Here</Button>
        <Button href="/fees-faq" variant="secondary">
          Fees & FAQs
        </Button>
      </div>
    </Section>
  );
}

