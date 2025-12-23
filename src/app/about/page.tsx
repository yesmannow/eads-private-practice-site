import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { AboutBio } from "@/components/sections/about/AboutBio";
import { AboutCredentials } from "@/components/sections/about/AboutCredentials";
import { AboutFinalCTA } from "@/components/sections/about/AboutFinalCTA";
import { AboutFit } from "@/components/sections/about/AboutFit";
import { AboutHero } from "@/components/sections/about/AboutHero";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Clinician background, approach, and areas of focus.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutBio />
      <AboutCredentials />
      <AboutFit />
      <AboutFinalCTA />
    </>
  );
}
