import { Card } from "../../ui/card";
import { Section } from "../../ui/section";
import { site } from "@/config/site";

export function TelehealthLocationCard() {
  return (
    <Section
      eyebrow="Location"
      title="Telehealth and location"
      background="muted"
    >
      <Card title="Service locations">
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>
              <strong>Telehealth:</strong> {site.telehealthLine}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-900" aria-hidden />
            <span>
              <strong>In-person:</strong> {site.locationShort} (placeholder if available)
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          <strong>Important:</strong> Client must be located in the state of licensure at time of session.
        </p>
      </Card>
    </Section>
  );
}

