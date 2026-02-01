import { Section } from "../../ui/section";

export function ContactDisclaimers() {
  return (
    <Section
      eyebrow="Important"
      title="Safety and privacy"
    >
      <div className="space-y-4 rounded-2xl border-2 border-red-200 bg-red-50 p-6 text-slate-800">
        <p className="font-semibold text-red-900">Do not use this form for emergencies.</p>
        <p>
          If you are in immediate danger call 911. In the U.S., call/text 988.
        </p>
      </div>
    </Section>
  );
}

