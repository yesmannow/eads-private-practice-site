import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { site, siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <Card title="Direct contact">
      <div className="space-y-5 text-slate-700">
        <div className="flex items-start gap-3 group">
          <div className="mt-0.5 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Phone className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 mb-1">Phone</p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-sky-900 hover:text-sky-800 hover:underline transition-all"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 group">
          <div className="mt-0.5 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Mail className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 mb-1">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sky-900 hover:text-sky-800 hover:underline transition-all break-all"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 group">
          <div className="mt-0.5 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <MapPin className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 mb-1">Location</p>
            <p className="text-slate-700">{site.locationShort}</p>
            <p className="mt-1 text-sm text-slate-600">{site.telehealthLine}</p>
            <p className="mt-1 text-sm text-slate-600">Licensed Social Worker (MA, LSW)</p>
          </div>
        </div>
        <div className="flex items-start gap-3 group">
          <div className="mt-0.5 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 mb-1">Hours</p>
            <p className="text-slate-700">By appointment</p>
            <p className="mt-1 text-sm text-slate-600">Flexible scheduling available</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button href={`mailto:${siteConfig.contact.email}`} variant="secondary" className="w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
          Email the practice
        </Button>
      </div>
    </Card>
  );
}

