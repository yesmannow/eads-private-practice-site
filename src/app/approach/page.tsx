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

          {/* Approach */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 py-12 border-b border-gray-200">
            <div className="md:pr-8">
              <h2 className="text-xl font-bold text-gray-900">Approach</h2>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                My approach is rooted in contextual behavioral therapies, including Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT). These therapies build upon traditional Cognitive Behavioral Therapy (CBT) by incorporating mindfulness and acceptance.
              </p>
              <p>
                DBT provides practical skills for managing distress, regulating emotions, improving relationships, and practicing mindfulness. ACT focuses on living a values-driven life, even in the face of life&apos;s inevitable challenges. I have also received training in Cognitive Processing Therapy (CPT) for PTSD.
              </p>
              <p>
                Additionally, I integrate elements of relational and trauma-focused therapies to tailor the therapeutic experience to each individual.
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

