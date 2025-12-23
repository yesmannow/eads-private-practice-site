import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { ContactDisclaimers } from "@/components/sections/contact/ContactDisclaimers";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { ContactMain } from "@/components/sections/contact/ContactMain";

export const metadata: Metadata = createMetadata({
  title: "Contact | Therapy Practice in Bloomington, IN",
  description: "Contact Steady Path Counseling in Bloomington, Indiana. Request a therapy consultation or ask questions about services, fees, and availability.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Request a consultation or ask a general question."
        primaryAction={{ label: "Request a Consultation", href: "/start-here" }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      >
        <p className="text-sm text-muted-foreground">
          Please avoid including sensitive clinical details.
        </p>
      </PageHero>
      <ContactMain />
      <ContactDisclaimers />
      <ContactFinalCTA />
    </>
  );
}
