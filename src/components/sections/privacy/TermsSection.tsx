import { Section } from "../../ui/section";

interface TermsSectionProps {
  title: string;
  content: string;
}

export function TermsSection({ title, content }: TermsSectionProps) {
  return (
    <Section
      eyebrow="Terms"
      title={title}
    >
      <div
        className="space-y-4 text-slate-700"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Section>
  );
}

