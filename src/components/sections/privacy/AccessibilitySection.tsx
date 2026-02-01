import { Section } from "../../ui/section";
import { siteConfig } from "@/config/site";

export function AccessibilitySection() {
  return (
    <Section
      id="accessibility"
      eyebrow="Accessibility"
      title="Accessibility commitment"
      background="muted"
    >
      <div className="space-y-4 text-slate-700">
        <p>
          This site is designed with accessibility in mind, including semantic HTML, keyboard navigation support, visible focus indicators, and color contrast that meets WCAG guidelines.
        </p>
        <p>
          If you encounter an accessibility barrier on this website, please contact us so we can address it. You can reach us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-sky-900 underline hover:text-sky-800">
            {siteConfig.contact.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${siteConfig.contact.phone}`} className="text-sky-900 underline hover:text-sky-800">
            {siteConfig.contact.phone}
          </a>.
        </p>
        <p>
          Reasonable accommodations for therapy sessions (captions, pacing, breaks, format preferences) are welcomed. Please include your needs when scheduling so we can plan together.
        </p>
      </div>
    </Section>
  );
}

