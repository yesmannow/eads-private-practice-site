import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { Callout, Section } from "../../ui";

export function ContactMain() {
  return (
    <Section
      eyebrow="Get in touch"
      title="Contact options"
      background="muted"
      id="contact-form"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <ContactForm />
          <Callout variant="info" title="What to include (and what not to include)">
            <ul className="space-y-2 text-foreground/80">
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                <span><strong>Include:</strong> Your goals, availability, service interest, general questions</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                <span><strong>Avoid:</strong> Sensitive personal details, detailed trauma history, or urgent crisis information</span>
              </li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              If you&apos;re not sure what to write, that&apos;s okay. A brief note about what you&apos;re looking for is enough.
            </p>
          </Callout>
        </div>
        <div className="space-y-6">
          <ContactInfo />
          {/* Response Time Info Card */}
          <div className="p-6 bg-gradient-to-br from-accent/5 to-white rounded-2xl border border-accent/10 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Looking forward to hearing from you</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              I typically respond within 24-48 hours. If you need immediate support, please reach out by phone or contact a crisis resource.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

