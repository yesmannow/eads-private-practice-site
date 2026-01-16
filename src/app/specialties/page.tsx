import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/section";
import { Brain, Heart, Users, Sparkles, CheckCircle2, Flower } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialties | Blazing Star Therapy",
  description: "Areas of specialization and therapeutic approaches at Blazing Star Therapy in Bloomington, Indiana.",
};

export default function SpecialtiesPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="My Specialties"
        description="Areas of expertise and therapeutic approaches"
      />
      
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
