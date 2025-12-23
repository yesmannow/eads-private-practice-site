import { Card } from "../../ui/card";
import { Section } from "../../ui/section";

export function PrivacySection() {
  return (
    <Section
      eyebrow="Privacy"
      title="Privacy information"
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Information collection">
          <div className="space-y-3 text-slate-700">
            <p>
              This website collects minimal technical data needed to operate and secure the site (such as IP address and browser type).
            </p>
            <p>
              If you contact us via email or phone, we receive that information. The contact form on this site is front-end only and does not send information to a server. Do not include protected health information (PHI) or sensitive clinical details in forms or unencrypted email.
            </p>
          </div>
        </Card>
        <Card title="Cookies and analytics">
          <div className="space-y-3 text-slate-700">
            <p>
              This site does not use cookies or analytics tracking (placeholder if different).
            </p>
            <p>
              Third-party services: Placeholder information about any third-party services used (e.g., hosting, email providers).
            </p>
          </div>
        </Card>
      </div>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="font-semibold text-slate-900">Telehealth and communication</p>
        <p className="mt-2 text-slate-700">
          Telehealth services follow HIPAA-aligned practices with secure video platforms and private spaces. Email and phone communication may not be encrypted; please limit sensitive details in those channels.
        </p>
      </div>
    </Section>
  );
}

