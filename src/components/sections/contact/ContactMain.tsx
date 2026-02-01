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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-secondary/40 shadow-lg">
            <Image
              src="/images/design-images/hand-4661763_1280.jpg"
              alt="An open hand reaching toward light"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

