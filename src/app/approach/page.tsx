import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/section";
import { CheckCircle2, HeartPulse, Scale, ArrowRight, Leaf, Flower2, Sun, Wind } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Therapeutic Approach | Blazing Star Therapy",
  description: "Discover my client-centered approach to therapy, integrating ACT, DBT, and other evidence-based modalities to support your healing journey.",
};

export default function ApproachPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <PageHero
        title="My Therapeutic Approach"
        description="A relationship-centered path to healing and growth"
      />
      
      {/* Core Philosophy Section */}
      <Section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <HeartPulse className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Therapeutic Relationship</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I center the therapeutic relationship. Healing and growth is most likely to happen in therapy within a relationship of safety, empathy, and collaboration. That is key to having the willingness to explore challenging and vulnerable themes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Therapeutic Modalities Section */}
      <Section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Therapeutic Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrating evidence-based approaches for lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Contextual Behavioral Therapies</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                My approach is grounded in contextual behavioral therapies including Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT). ACT and DBT expand on traditional Cognitive Behavior Therapy (CBT), and incorporate the addition of mindfulness and acceptance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <Flower2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Specialized Approaches</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                DBT offers specific skills for coping with distress, navigating strong emotions, handling challenges in relationships, and doing so mindfully. ACT is all about doing what matters most to us, despite the inevitable pain in life. Additionally, I have participated in training in Cognitive Processing Therapy (CPT) for PTSD.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Integrative & Holistic</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
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
            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Initial Consultation (1-2 sessions)</h3>
                <p className="text-muted-foreground">
                  We'll meet to better understand the problems and goals you'd like to address. This helps us determine if we're a good fit to work together.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Treatment Plan</h3>
                <p className="text-muted-foreground">
                  Together, we'll develop a treatment plan tailored to your specific needs and goals. This is your journey, and I'm here to guide and support you.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 flex items-start pt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Check-ins</h3>
                <p className="text-muted-foreground">
                  We'll regularly check in to ensure our work together is helpful and adjust our approach as needed. Your feedback is invaluable in shaping our work together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-16 bg-gray-50">
        <div className="container max-w-3xl mx-auto text-center px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-6">You're in the Driver's Seat</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You are always in charge, and I'm here to help guide you. If at any point you or I think another therapist would be a better fit, I'm happy to provide resources and referrals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Regardless of the treatment plan and intervention, I commit to showing up for you with empathy, openness, and care.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
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
