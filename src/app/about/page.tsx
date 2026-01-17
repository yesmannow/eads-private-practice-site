import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/motion/MotionSection";
import { ScrollReveal, StaggerReveal } from "@/components/motion/ScrollReveal";
import { CardHover } from "@/components/motion/CardHover";

export const metadata: Metadata = {
  title: "About | Tucker Eads, LCSW - Blazing Star Therapy",
  description: "Learn about Tucker Eads, LCSW, and the inspiration behind Blazing Star Therapy in Bloomington, Indiana."
};

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/tucker_headshot (1).jpg"
            alt="Tucker Eads, LCSW"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl">My journey in mental health and the story behind Blazing Star Therapy</p>
        </div>
      </section>

      {/* My Story Section */}
      <MotionSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
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

          <StaggerReveal className="mt-16 grid md:grid-cols-2 gap-8">
            <CardHover>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/jeffrey-hamilton-BLo2SfRwxqU-unsplash (1).jpg"
                  alt="Nature scene"
                  fill
                  className="object-cover"
                />
              </div>
            </CardHover>
            <CardHover>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/IMG_8960-2 (1).jpg"
                  alt="Tucker Eads"
                  fill
                  className="object-cover"
                />
              </div>
            </CardHover>
          </StaggerReveal>
        </div>
      </MotionSection>

      {/* Blazing Star Section */}
      <MotionSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <ScrollReveal className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Blazing Star?</h2>
              <div className="prose text-gray-700 space-y-4">
                <p>
                  Blazing star, or Liatris, is a genus of perennial flowers native to North America. Prairie blazing star 
                  (Liatris pycnostachya) is an iconic prairie plant, blooming from midsummer onward. Rough blazing star 
                  (Liatris aspera) is hardy and tolerates drought and sandy and rocky soil.
                </p>
                <p>
                  Blazing stars host numerous pollinators including bees, butterflies, moths, and even hummingbirds.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/about/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg"
                  alt="Rough blazing star with monarch butterfly"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 italic">Rough blazing star with monarch butterfly</p>
            </ScrollReveal>
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm here to support you in navigating life's challenges and finding your path forward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <CardHover>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </CardHover>
          </ScrollReveal>
        </div>
      </MotionSection>
    </main>
  );
}
