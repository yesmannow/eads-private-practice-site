type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item) => (
        <details
          key={item.question}
          className="group p-6 [&[open]>summary>svg]:rotate-45"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-lg font-semibold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900">
            {item.question}
            <svg
              className="h-5 w-5 text-slate-500 transition"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 3.5a1 1 0 0 1 1 1v4.5h4.5a1 1 0 1 1 0 2H11V15.5a1 1 0 1 1-2 0V11H4.5a1 1 0 0 1 0-2H9V4.5a1 1 0 0 1 1-1Z" />
            </svg>
          </summary>
          <div className="mt-3 text-base leading-7 text-slate-700">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
