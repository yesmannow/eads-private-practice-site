import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Heart, Flower, Sun, Shield } from "lucide-react";
import { MotionSection } from "@/components/motion/MotionSection";
import { CardHover } from "@/components/motion/CardHover";
import { ScrollReveal, StaggerReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Blazing Star Therapy | Psychotherapy and Counseling in Bloomington, IN",
  description: "Tucker Eads, LCSW - Evidence-based therapy for anxiety, stress, and life transitions in Bloomington, Indiana. Specializing in ACT and DBT approaches."
};

const features = [
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    title: "Compassionate Care",
    description: "A warm, non-judgmental space for your healing journey."
  },
  {
    icon: <Flower className="w-8 h-8 text-accent" />,
    title: "Nature-Inspired Growth",
    description: "Drawing wisdom from nature's resilience and beauty."
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Client-Centered",
    description: "Your goals and values guide our work together."
  },
  {
    icon: <Sun className="w-8 h-8 text-accent" />,
    title: "Holistic Healing",
    description: "Supporting mind, body, and spirit in your journey."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home page/home (1).jpg"
            alt="Field of blazing star flowers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blazing Star Therapy</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Guiding you toward a life of meaning, purpose, and resilience through evidence-based therapy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/contact" 
              className="bg-white text-foreground px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/approach" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Learn About My Approach
            </Link>
          </div>
          <div className="animate-bounce mt-16">
            <p className="text-sm mb-2">Scroll to explore</p>
            <ArrowDown className="mx-auto h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <MotionSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Blazing Star Therapy?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A compassionate approach to mental health and well-being
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <CardHover key={index}>
                <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardHover>
            ))}
          </StaggerReveal>
        </div>
      </MotionSection>

      {/* About Section */}
      <MotionSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Tucker Eads, LCSW</h2>
                <div className="prose-lg text-gray-700 space-y-6">
                  <p>
                    With over 7 years of experience in psychotherapy, I specialize in helping individuals navigate anxiety, 
                    stress, life transitions, and the challenges of chronic health conditions.
                  </p>
                  <p>
                    My approach is grounded in evidence-based therapies including Acceptance and Commitment Therapy (ACT) 
                    and Dialectical Behavior Therapy (DBT), tailored to your unique needs and goals.
                  </p>
                  <div className="mt-8">
                    <Link 
                      href="/about" 
                      className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      Learn more about me
                      <ArrowDown className="ml-2 w-4 h-4 rotate-90" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/3">
              <ScrollReveal delay={0.2}>
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
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward positive change. I&apos;m here to support you every step of the way.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </Link>
              <CardHover>
                <Link 
                  href="/fees-faq" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  View Fees & FAQ
                </Link>
              </CardHover>
            </div>
          </ScrollReveal>
        </div>
      </MotionSection>
    </main>
  );
}
