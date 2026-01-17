import { Section } from "../../ui/section";
import { getSiteSettings } from "@/config/site-server";

interface AccessibilitySectionProps {
  title: string;
  content: string;
}

export async function AccessibilitySection({ title, content }: AccessibilitySectionProps) {
  const siteSettings = await getSiteSettings();

  // Replace placeholders in content with actual contact info
  const processedContent = content
    .replace(/\{email\}/g, siteSettings.contact.email)
    .replace(/\{phone\}/g, siteSettings.contact.phone);

  return (
    <Section
      id="accessibility"
      eyebrow="Accessibility"
      title={title}
      background="muted"
    >
      <div
        className="space-y-4 text-slate-700"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </Section>
  );
}

