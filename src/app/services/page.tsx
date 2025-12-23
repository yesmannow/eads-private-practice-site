import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { ConcernsList } from "@/components/sections/services/ConcernsList";
import { CoreServices } from "@/components/sections/services/CoreServices";
import { ServicesFinalCTA } from "@/components/sections/services/ServicesFinalCTA";
import { ServicesLogistics } from "@/components/sections/services/ServicesLogistics";
import { SessionStyle } from "@/components/sections/services/SessionStyle";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Evidence-informed therapy and care navigation services in Bloomington, Indiana and telehealth across Indiana.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageHero
        title="Services"
        description="Evidence-informed psychotherapy and care navigation for adults managing stress, adjustment, caregiving demands, and health-related change."
        primaryAction={{ label: "Request a Consultation", href: "/start-here" }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      />
      <CoreServices />
      <ConcernsList />
      <SessionStyle />
      <ServicesLogistics />
      <ServicesFinalCTA />
    </>
  );
}
