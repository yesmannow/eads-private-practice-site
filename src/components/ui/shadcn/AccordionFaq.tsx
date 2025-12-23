import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type AccordionFaqProps = {
  items: FAQItem[];
  className?: string;
};

export function AccordionFaq({ items, className }: AccordionFaqProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-b">
          <AccordionTrigger className="text-left text-lg font-semibold">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

