import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Brain, Heart, Users, Sparkles, CheckCircle2, Flower } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialties | Blazing Star Therapy",
  description: "Areas of specialization and therapeutic approaches at Blazing Star Therapy in Bloomington, Indiana.",
};

export default function SpecialtiesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg"
            alt="Monarch butterfly on rough blazing star flower"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Specialties</h1>
          <p className="text-xl">Areas of expertise and therapeutic approaches</p>
        </div>
      </section>
      
      <Section className="py-12 md:py-16 lg:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Areas of Focus
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: <Brain className="w-8 h-8 text-accent" />,
                    title: "Anxiety & Stress",
                    description: "Evidence-based approaches to manage and reduce anxiety and stress in daily life."
                  },
                  {
                    icon: <Flower className="w-8 h-8 text-accent" />,
                    title: "Life Transitions",
                    description: "Support during major life changes, helping you navigate challenges and find stability."
                  },
                  {
                    icon: <Users className="w-8 h-8 text-accent" />,
                    title: "Relationship Issues",
                    description: "Improving communication and building healthier relationships with others."
                  },
                  {
                    icon: <Heart className="w-8 h-8 text-accent" />,
                    title: "Self-Esteem & Identity",
                    description: "Building self-confidence and developing a stronger sense of self."
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Therapeutic Approaches
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Heart className="w-5 h-5 text-accent" />,
                    text: "Person-Centered Therapy: Creating a non-judgmental space for self-exploration and growth."
                  },
                  {
                    icon: <Brain className="w-5 h-5 text-accent" />,
                    text: "Cognitive Behavioral Therapy (CBT): Identifying and changing negative thought patterns."
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 text-accent" />,
                    text: "Solution-Focused Brief Therapy: Focusing on solutions and your strengths."
                  },
                  {
                    icon: <Flower className="w-5 h-5 text-accent" />,
                    text: "Mindfulness Techniques: Developing present-moment awareness and self-compassion."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
