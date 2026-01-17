import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { HeartPulse, ArrowRight, Leaf, Flower2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Therapeutic Approach | Blazing Star Therapy",
  description: "Discover my client-centered approach to therapy, integrating ACT, DBT, and other evidence-based modalities to support your healing journey.",
};

export default function ApproachPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/jeffrey-hamilton-BLo2SfRwxqU-unsplash (1).jpg"
            alt="Peaceful nature landscape representing therapeutic growth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">My Therapeutic Approach</h1>
          <p className="text-xl text-white/95 drop-shadow-md">A relationship-centered path to healing and growth</p>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <Section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="text-center lg:text-left mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <HeartPulse className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Therapeutic Relationship</h2>
                <div className="max-w-3xl lg:mx-0 mx-auto">
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    I center the therapeutic relationship. Healing and growth is most likely to happen in therapy within a relationship of safety, empathy, and collaboration. That is key to having the willingness to explore challenging and vulnerable themes.
                  </p>
                  <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg">
                    <p className="text-base text-gray-700 italic">
                      &ldquo;My commitment is to create a space where you feel heard, understood, and empowered to make meaningful changes in your life.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 sticky top-8">
                <Image
                  src="/images/bio-photo/tucker-bio-photo.jpg"
                  alt="Tucker Eads, LCSW - Blazing Star Therapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-600 font-medium">Tucker Eads, LCSW</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Therapeutic Modalities Section */}
      <Section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Therapeutic Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrating evidence-based approaches for lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-600">
                  <Leaf className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">Contextual Behavioral Therapies</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                My approach is grounded in contextual behavioral therapies including Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT). ACT and DBT expand on traditional Cognitive Behavior Therapy (CBT), and incorporate the addition of mindfulness and acceptance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-green-600">
                  <Flower2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">Specialized Approaches</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                DBT offers specific skills for coping with distress, navigating strong emotions, handling challenges in relationships, and doing so mindfully. ACT is all about doing what matters most to us, despite the inevitable pain in life. Additionally, I have participated in training in Cognitive Processing Therapy (CPT) for PTSD.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6">Integrative & Holistic</h3>
            <p className="text-muted-foreground leading-relaxed mb-0 text-base">
              I also integrate elements of other modalities including relational and trauma therapies, ensuring a comprehensive approach that addresses your unique needs and goals.
            </p>
          </div>
        </div>
      </Section>

      {/* What to Expect Section */}
      <Section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-xl text-muted-foreground">
              Your journey to healing starts here
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-lg font-bold group-hover:scale-110 transition-transform shadow-sm">1</div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-3">Initial Consultation (1-2 sessions)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll meet to better understand the problems and goals you'd like to address. This helps us determine if we're a good fit to work together.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-lg font-bold group-hover:scale-110 transition-transform shadow-sm">2</div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-3">Personalized Treatment Plan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Together, we'll develop a treatment plan tailored to your specific needs and goals. This is your journey, and I'm here to guide and support you.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-lg font-bold group-hover:scale-110 transition-transform shadow-sm">3</div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-3">Ongoing Check-ins</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll regularly check in to ensure our work together is helpful and adjust our approach as needed. Your feedback is invaluable in shaping our work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-3xl mx-auto text-center px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6">You're in the Driver's Seat</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You are always in charge, and I'm here to help guide you. If at any point you or I think another therapist would be a better fit, I'm happy to provide resources and referrals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Regardless of the treatment plan and intervention, I commit to showing up for you with empathy, openness, and care.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-0.5"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

