import { Section } from "../../ui/section";

export function TermsSection() {
  return (
    <Section
      eyebrow="Terms"
      title="Terms of use"
    >
      <div className="space-y-4 text-slate-700">
        <p>
          The information on this site is for educational and scheduling purposes only. It is not a substitute for medical or mental health advice and does not create a client relationship. Therapy services begin only after completing required consent forms and scheduling an appointment.
        </p>
        <p>
          This practice is not an emergency service. If you are in immediate danger call 911; in the U.S. you can call or text 988.
        </p>
      </div>
    </Section>
  );
}

