import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export function StartHereFinalCTA() {
  return (
    <Section background="muted">
      <div className="rounded-3xl bg-primary px-8 py-10 text-primary-foreground shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-primary-foreground">Request a consultation</h2>
            <p className="text-primary-foreground/80">
              To discuss fit and next steps, send a brief message and we will respond as soon as possible.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="outline" className="bg-background text-foreground hover:brightness-95 hover:shadow-md">
              Request a Consultation
            </Button>
            <Button
              href="/fees-faq"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/15 hover:shadow-sm focus-visible:outline-primary-foreground"
            >
              View Fees & FAQs
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

