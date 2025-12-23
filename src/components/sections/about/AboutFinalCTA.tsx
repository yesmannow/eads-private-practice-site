import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

export function AboutFinalCTA() {
  return (
    <Section background="muted">
      <div className="rounded-3xl bg-sky-900 px-8 py-10 text-white shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Request a consultation</h2>
            <p className="text-sky-100">
              To discuss fit and next steps, start with a brief consultation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/start-here" variant="secondary">
              Request a Consultation
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              className="text-white hover:bg-white/10 focus-visible:outline-white"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

