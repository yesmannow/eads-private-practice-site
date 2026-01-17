import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ContactDisclaimers } from "@/components/sections/contact/ContactDisclaimers";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { ContactMain } from "@/components/sections/contact/ContactMain";
import { ContactHero } from "@/components/sections/contact/ContactHero";

export const metadata: Metadata = createMetadata({
  title: "Contact | Therapy Practice in Bloomington, IN",
  description: "Contact Steady Path Counseling in Bloomington, Indiana. Request a therapy consultation or ask questions about services, fees, and availability.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <ContactDisclaimers />
      <ContactFinalCTA />
    </>
  );
}
