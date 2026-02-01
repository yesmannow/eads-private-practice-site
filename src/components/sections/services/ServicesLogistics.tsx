import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Section } from "../../ui/section";
import { site } from "@/config/site";

export function ServicesLogistics() {
  return (
    <Section
      eyebrow="Logistics"
      title="Practical details"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Location and format">
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
              <span>
                <strong>Location:</strong> {site.locationShort}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
              <span>
                <strong>Telehealth:</strong> {site.telehealthLine}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
              <span>
                <strong>Session length:</strong> 50–55 minutes (placeholder)
              </span>
            </li>
          </ul>
        </Card>
        <Card title="Scheduling and policies">
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
              <span>By appointment</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
              <span>
                <strong>Fees/insurance:</strong>{" "}
                <a href="/fees-faq" className="text-sky-900 underline hover:text-sky-800">
                  See Fees & FAQs
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
              <span>
                <strong>Cancellation policy:</strong>{" "}
                <a href="/fees-faq" className="text-sky-900 underline hover:text-sky-800">
                  See Fees & FAQs
                </a>
              </span>
            </li>
          </ul>
        </Card>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href="/fees-faq">Fees & FAQs</Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </Section>
  );
}

