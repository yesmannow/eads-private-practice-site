import { AccordionFaq } from "./ui/shadcn/AccordionFaq";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      <AccordionFaq items={items} className="divide-y divide-border" />
    </div>
  );
}
