import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

const notes = [
  {
    title: "Form privacy",
    content: "Do not include sensitive clinical details in the contact form.",
  },
  {
    title: "Crisis",
    content: "If you are in immediate danger, call 911. In the U.S., call/text 988.",
  },
  {
    title: "Fit boundaries",
    content:
      "May not be the right fit for crisis services, court-mandated treatment, or intensive psychiatric care. Referrals can be provided when appropriate.",
  },
];

export function ImportantNotes() {
  return (
    <Section
      eyebrow="Important"
      title="Important notes"
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.title} title={note.title}>
            <p>{note.content}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

