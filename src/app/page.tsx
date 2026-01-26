import { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { MotionSection } from "@/components/motion/MotionSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Blazing Star Therapy | Psychotherapy and Counseling in Bloomington, IN",
  description: "Tucker Eads, LCSW - Evidence-based therapy for anxiety, stress, and life transitions in Bloomington, Indiana. Specializing in ACT and DBT approaches."
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Blazing Star Flowers */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home page/home (1).jpg"
            alt="Field of blazing star flowers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Blazing Star Therapy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
            Psychotherapy and counseling
          </p>
          
          {/* Scroll Down Indicator */}
          <div className="animate-bounce mt-16">
            <p className="text-sm mb-2 text-white/90">Scroll down</p>
            <ArrowDown className="mx-auto h-6 w-6 text-white/90" />
          </div>
        </div>
      </section>

      {/* Bio Section with Headshot */}
      <MotionSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Headshot on Left */}
            <div className="lg:w-1/3 flex-shrink-0">
              <ScrollReveal>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/home page/tucker_headshot (1).jpg"
                    alt="Tucker Eads, LCSW"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            </div>
            
            {/* Bio Text on Right */}
            <div className="lg:w-2/3">
              <ScrollReveal delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Tucker Eads, LCSW
                </h2>
                <div className="prose-lg text-gray-700 space-y-4">
                  <p>
                    I&apos;m a Licensed Clinical Social Worker (LCSW) with over 7 years of psychotherapy experience. 
                    I support people in living a full life despite pain and struggle. Together we can create space 
                    to navigate challenges, unwind stress, and move towards purpose.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
