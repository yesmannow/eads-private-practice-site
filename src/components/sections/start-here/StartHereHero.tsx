import { Button } from "../../ui/button";

export function StartHereHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Start Here</h1>
          <p className="text-lg leading-8 text-slate-700">
            A brief overview of fit, what to expect, and how to request a consultation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact">Request a Consultation</Button>
            <Button href="/fees-faq" variant="secondary">
              View Fees & FAQs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

