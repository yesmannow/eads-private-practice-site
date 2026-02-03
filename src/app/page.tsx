import { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { AboutTuckerSection } from "@/components/sections/home/AboutTuckerSection";
import { ApproachSection } from "@/components/sections/home/ApproachSection";
import { ConnectSection } from "@/components/sections/home/ConnectSection";
import { BlazingStarStorySection } from "@/components/sections/home/BlazingStarStorySection";

export const metadata: Metadata = {
  title: "Blazing Star Therapy | Psychotherapy and Counseling in Bloomington, IN",
  description: "Tucker Eads, LCSW - Evidence-based therapy for anxiety, stress, and life transitions in Bloomington, Indiana. Specializing in ACT and DBT approaches."
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <HeroSection />

      {/* About Tucker Section - Refactored Grid */}
      <AboutTuckerSection />

      {/* Therapeutic Approach - Animated Feature Hub */}
      <ApproachSection />

      {/* Connect & Consult Action Center */}
      <ConnectSection />

      {/* Botanical Discovery Storytelling */}
      <BlazingStarStorySection />
    </main>
  );
}
