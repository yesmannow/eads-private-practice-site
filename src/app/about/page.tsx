import { Metadata } from "next";
import Image from "next/image";
import { MotionSection } from "@/components/motion/MotionSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Tucker Eads, LCSW - Blazing Star Therapy",
  description: "Learn about Tucker Eads, LCSW, and the inspiration behind Blazing Star Therapy in Bloomington, Indiana."
};

export default function About() {
  return (
    <main className="flex-1">
      {/* Unified About Section */}
      <MotionSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            {/* Left Column: Bio Image */}
            <ScrollReveal>
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bio-photo/tucker-bio-photo.jpg"
                  alt="Tucker Eads, LCSW"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Right Column: About Text */}
            <ScrollReveal delay={0.2}>
              <div className="prose-lg text-gray-700 space-y-6">
                <p>
                  I found this work after seeking support for myself as a young adult at the National Alliance on Mental Illness (NAMI).
                  I then volunteered at NAMI facilitating support and education groups. This meaningful work inspired me to complete a
                  Master&apos;s in Social Work from the University of Chicago.
                </p>
                <p>
                  I enjoyed developing one-on-one therapeutic relationships during my internship on the outpatient mental health team at
                  Mt. Sinai Chicago. This led me to pursue a yearlong psychotherapy fellowship focused on ACT and DBT with Paul Holmes,
                  PsyD, at Emotion Management Program. During my 5+ years as a psychotherapist at Rush University Medical Center I
                  developed an interest and specialty in working with folks experiencing complex medical challenges and chronic pain.
                </p>
                <p>
                  Personally, I&apos;m down-to-earth and draw inspiration and joy from live music, nature, organizers and activists, art,
                  food and history. I love to grow food and flowers, ride bikes, and am interested in learning more about native plants
                  and regenerative ecology.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
