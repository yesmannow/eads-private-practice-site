import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { site, siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <Card title="Direct contact">
      <div className="space-y-4 text-slate-700">
        <div>
          <p className="font-semibold text-slate-900">Phone</p>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-sky-900 underline hover:text-sky-800"
          >
            {siteConfig.contact.phone}
          </a>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Email</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-sky-900 underline hover:text-sky-800"
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Location</p>
          <p>{site.locationShort}</p>
          <p className="mt-1 text-sm text-slate-600">{site.telehealthLine}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Hours</p>
          <p className="text-sm text-slate-600">Placeholder hours (e.g., By appointment)</p>
        </div>
      </div>
      <div className="mt-6">
        <Button href={`mailto:${siteConfig.contact.email}`} variant="secondary" className="w-full sm:w-auto">
          Email the practice
        </Button>
      </div>
    </Card>
  );
}

