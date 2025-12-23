import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { AboutBio } from "@/components/sections/about/AboutBio";
import { AboutCredentials } from "@/components/sections/about/AboutCredentials";
import { AboutFinalCTA } from "@/components/sections/about/AboutFinalCTA";
import { AboutFit } from "@/components/sections/about/AboutFit";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Clinician background, approach, and areas of focus.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        description="Clinician background and treatment philosophy."
        primaryAction={{ label: "Request a Consultation", href: "/start-here" }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      />
      <AboutBio />
      <AboutCredentials />
      <AboutFit />
      <AboutFinalCTA />
    </>
  );
}
