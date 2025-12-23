import { Button } from "../../ui/button";

export function ContactHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Contact</h1>
          <p className="text-lg leading-8 text-slate-700">
            Request a consultation or ask a general question.
          </p>
          <p className="text-sm text-slate-600">
            Please avoid including sensitive clinical details.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/start-here">Request a Consultation</Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

