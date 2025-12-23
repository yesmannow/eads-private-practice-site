import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ConcernsList } from "@/components/sections/services/ConcernsList";
import { CoreServices } from "@/components/sections/services/CoreServices";
import { ServicesFinalCTA } from "@/components/sections/services/ServicesFinalCTA";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
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
      <ServicesHero />
      <CoreServices />
      <ConcernsList />
      <SessionStyle />
      <ServicesLogistics />
      <ServicesFinalCTA />
    </>
  );
}
