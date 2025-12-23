import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ContactDisclaimers } from "@/components/sections/contact/ContactDisclaimers";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMain } from "@/components/sections/contact/ContactMain";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Request a consultation or ask a general question.",
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
