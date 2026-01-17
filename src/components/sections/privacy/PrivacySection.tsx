import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

interface PrivacySectionProps {
  title: string;
  informationCollection: {
    title: string;
    paragraphs: Array<{ text: string }>;
  };
  cookiesAnalytics: {
    title: string;
    paragraphs: Array<{ text: string }>;
  };
  telehealthCommunication: {
    title: string;
    content: string;
  };
}

export function PrivacySection({
  title,
  informationCollection,
  cookiesAnalytics,
  telehealthCommunication,
}: PrivacySectionProps) {
  return (
    <Section
      eyebrow="Privacy"
      title={title}
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card title={informationCollection.title}>
          <div className="space-y-3 text-slate-700">
            {informationCollection.paragraphs.map((para, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: para.text }}
              />
            ))}
          </div>
        </Card>
        <Card title={cookiesAnalytics.title}>
          <div className="space-y-3 text-slate-700">
            {cookiesAnalytics.paragraphs.map((para, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: para.text }}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="font-semibold text-slate-900">{telehealthCommunication.title}</p>
        <div
          className="mt-2 text-slate-700"
          dangerouslySetInnerHTML={{ __html: telehealthCommunication.content }}
        />
      </div>
    </Section>
  );
}

