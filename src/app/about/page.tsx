import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/motion/MotionSection";
import { ScrollReveal, StaggerReveal } from "@/components/motion/ScrollReveal";
import { CardHover } from "@/components/motion/CardHover";
import { getContentFile, type AboutPageContent } from "@/lib/content";
import { getSiteSettings } from "@/config/site-server";

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  return {
    title: `About | ${siteSettings.name}`,
    description: `Learn about ${siteSettings.name} and the inspiration behind the practice in Bloomington, Indiana.`,
  };
}

export default async function About() {
  const aboutContent = await getContentFile<AboutPageContent>('about-page.json').catch(() => null);
  const siteSettings = await getSiteSettings();

  // Fallback content
  const hero = aboutContent?.hero || {
    title: "About Me",
    subtitle: "My journey in mental health and the story behind Blazing Star Therapy",
  };

  const story = aboutContent?.story || {
    title: "My Story",
    paragraphs: [
      { text: "I found this work after seeking support for myself as a young adult at the National Alliance on Mental Illness (NAMI). I then volunteered at NAMI facilitating support and education groups. This meaningful work inspired me to complete a Master's in Social Work from the University of Chicago." },
      { text: "I enjoyed developing one-on-one therapeutic relationships during my internship on the outpatient mental health team at Mt. Sinai Chicago. This led me to pursue a yearlong psychotherapy fellowship focused on ACT and DBT with Paul Holmes, PsyD, at Emotion Management Program. During my 5+ years as a psychotherapist at Rush University Medical Center I developed an interest and specialty in working with folks experiencing complex medical challenges and chronic pain." },
      { text: "Personally, I'm down-to-earth and draw inspiration and joy from live music, nature, organizers and activists, art, food and history. I love to grow food and flowers, ride bikes, and am interested in learning more about native plants and regenerative ecology." },
    ],
  };

  const blazingStar = aboutContent?.blazingStar || {
    title: "What is Blazing Star?",
    paragraphs: [
      { text: "Blazing star, or Liatris, is a genus of perennial flowers native to North America. Prairie blazing star (Liatris pycnostachya) is an iconic prairie plant, blooming from midsummer onward. Rough blazing star (Liatris aspera) is hardy and tolerates drought and sandy and rocky soil." },
      { text: "Blazing stars host numerous pollinators including bees, butterflies, moths, and even hummingbirds." },
    ],
    image: "/images/about/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg",
    imageCaption: "Rough blazing star with monarch butterfly",
  };
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100">
        {hero.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={hero.backgroundImage}
              alt={hero.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
          </div>
        )}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{hero.title}</h1>
          <p className="text-xl text-white/95 drop-shadow-md">{hero.subtitle}</p>
        </div>
      </section>

      {/* My Story Section */}
      <MotionSection className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{story.title}</h2>
            <div className="prose-lg text-gray-700 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                {story.paragraphs.map((para, index) => (
                  <p key={index} className={index < story.paragraphs.length - 1 ? "mb-6" : "mb-0"}>
                    {para.text}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {story.images && story.images.length > 0 && (
            <StaggerReveal className="mt-16 grid md:grid-cols-2 gap-8">
              {story.images.map((img, index) => (
                <CardHover key={index}>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={img.image}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {index === 0 && <p className="mt-2 text-sm text-gray-600 italic text-center">{siteSettings.credentials.title}</p>}
                </CardHover>
              ))}
            </StaggerReveal>
          )}
        </div>
      </MotionSection>

      {/* Blazing Star Section */}
      <MotionSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <ScrollReveal className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{blazingStar.title}</h2>
              <div className="prose text-gray-700 space-y-4">
                {blazingStar.paragraphs.map((para, index) => (
                  <p key={index}>{para.text}</p>
                ))}
              </div>
            </ScrollReveal>
            {blazingStar.image && (
              <ScrollReveal delay={0.2} className="md:w-1/2">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={blazingStar.image}
                    alt={blazingStar.imageCaption || "Blazing star flower"}
                    fill
                    className="object-cover"
                  />
                </div>
                {blazingStar.imageCaption && (
                  <p className="mt-2 text-sm text-gray-500 italic">{blazingStar.imageCaption}</p>
                )}
              </ScrollReveal>
            )}
          </div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="py-16 bg-gradient-to-br from-accent via-accent to-accent/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 cta-pattern-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to start your journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/95">
              I'm here to support you in navigating life's challenges and finding your path forward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <CardHover>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/95 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
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
