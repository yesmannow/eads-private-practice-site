import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { Section } from "../../ui/section";

export function ContactMain() {
  return (
    <Section
      eyebrow="Get in touch"
      title="Contact options"
      background="muted"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </Section>
  );
}

