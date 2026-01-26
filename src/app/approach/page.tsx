import { Metadata } from "next";
import Image from "next/image";

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
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">My Therapeutic Approach</h1>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Therapeutic Relationship */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 py-12 border-b border-gray-200">
            <div className="md:pr-8">
              <h2 className="text-xl font-bold text-gray-900">Therapeutic relationship</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <p>
                I center the therapeutic relationship. Healing and growth is most likely to happen in therapy within a relationship of safety, empathy, and collaboration. That is key to having the willingness to explore challenging and vulnerable themes.
              </p>
            </div>
          </div>

          {/* Evidence Based */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 py-12 border-b border-gray-200">
            <div className="md:pr-8">
              <h2 className="text-xl font-bold text-gray-900">Evidence based</h2>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                My approach is grounded in contextual behavioral therapies including Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT). ACT and DBT expand on traditional Cognitive Behavior Therapy (CBT), and incorporate the addition of mindfulness and acceptance.
              </p>
              <p>
                DBT offers specific skills for coping with distress, navigating strong emotions, handling challenges in relationships, and doing so mindfully. ACT is all about doing what matters most to us, despite the inevitable pain in life. Additionally, I have participated in training in Cognitive Processing Therapy (CPT) for PTSD.
              </p>
              <p>
                I also integrate elements of other modalities including relational and trauma therapies.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 py-12">
            <div className="md:pr-8">
              <h2 className="text-xl font-bold text-gray-900">What to expect</h2>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                You are always in charge, and I&apos;m here to help guide you. Initially we&apos;ll meet for 1-2 sessions to better understand the problems and goals you&apos;d like to address. We&apos;ll then develop a treatment plan together and you can decide if I&apos;m a good fit. We&apos;ll check-in regularly to make sure sessions are helpful and adjust as needed. If you or I think another therapist would be a better fit, I&apos;m happy to provide resources and referrals.
              </p>
              <p>
                Regardless of the treatment plan and intervention, I commit to showing up for you with empathy, openness, and care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

