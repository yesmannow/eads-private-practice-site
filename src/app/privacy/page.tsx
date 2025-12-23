import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy, terms, and accessibility",
  description:
    "Learn how your information is handled, practice policies, and accessibility commitments for this website.",
};

export default function Privacy() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">Privacy</p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Privacy, terms, and accessibility
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              Transparency matters. This page summarizes how this site handles information, outlines
              practice policies, and shares accessibility commitments.
            </p>
          </div>
        </div>
      </section>

      <Section title="Privacy">
        <div className="space-y-4 text-slate-700">
          <p>
            This website collects minimal technical data needed to operate and secure the site (such as
            IP address and browser type). Contact form submissions are sent securely to the practice
            inbox and are not stored on the website. Do not share sensitive clinical details via the
            form.
          </p>
          <p>
            Telehealth services follow HIPAA-aligned practices with secure video platforms and private
            spaces. Email and phone communication may not be encrypted; please limit sensitive details
            in those channels.
          </p>
        </div>
      </Section>

      <Section title="Terms of use">
        <div className="space-y-4 text-slate-700">
          <p>
            The information on this site is for educational and scheduling purposes only. It is not a
            substitute for medical or mental health advice and does not create a client relationship.
            Therapy services begin only after completing required consent forms and scheduling an
            appointment.
          </p>
          <p>
            This practice is not an emergency service. If you are in immediate danger call 911; in the
            U.S. you can call or text 988.
          </p>
        </div>
      </Section>

      <Section title="Accessibility notes" background="muted">
        <div className="space-y-4 text-slate-700">
          <p>
            The site is designed with semantic HTML, keyboard-focus styles, and color contrast in mind.
            If you encounter an accessibility barrier, please reach out so we can address it.
          </p>
          <p>
            Reasonable accommodations for therapy sessions (captions, pacing, breaks, format
            preferences) are welcomed. Please include your needs when scheduling so we can plan
            together.
          </p>
        </div>
      </Section>
    </>
  );
}
