import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Calendar, Mail, CreditCard } from "lucide-react";
import { MotionSection } from "@/components/motion/MotionSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

export const metadata: Metadata = {
  title: "Blazing Star Therapy | Psychotherapy and Counseling in Bloomington, IN",
  description: "Tucker Eads, LCSW - Evidence-based therapy for anxiety, stress, and life transitions in Bloomington, Indiana. Specializing in ACT and DBT approaches."
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Blazing Star Flowers */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home page/home (1).jpg"
            alt="Field of blazing star flowers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Blazing Star Therapy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
            Psychotherapy and counseling
          </p>
          
          {/* Scroll Down Indicator */}
          <div className="animate-bounce mt-16">
            <p className="text-sm mb-2 text-white/90">Scroll down</p>
            <ArrowDown className="mx-auto h-6 w-6 text-white/90" />
          </div>
        </div>
      </section>

      {/* Bio Section with Headshot */}
      <MotionSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Headshot on Left */}
            <div className="lg:w-1/3 flex-shrink-0">
              <ScrollReveal>
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
            
            {/* Bio Text on Right */}
            <div className="lg:w-2/3">
              <ScrollReveal delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Tucker Eads, LCSW
                </h2>
                <div className="prose-lg text-gray-700 space-y-4">
                  <p>
                    I&apos;m a Licensed Clinical Social Worker (LCSW) with over 7 years of psychotherapy experience. 
                    I support people in living a full life despite pain and struggle. Together we can create space 
                    to navigate challenges, unwind stress, and move towards purpose.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* About Section */}
      <MotionSection id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Bio Image - Left Column */}
            <div className="lg:w-1/2 flex-shrink-0">
              <ScrollReveal>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/bio-photo/tucker-bio-photo.jpg"
                    alt="Tucker Eads, LCSW"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>
            
            {/* Bio Text - Right Column */}
            <div className="lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About</h2>
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
        </div>
      </MotionSection>

      {/* Blazing Star Section */}
      <MotionSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Text Content */}
            <ScrollReveal className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What is Blazing Star?</h2>
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
            
            {/* Image with Caption */}
            <ScrollReveal delay={0.2} className="md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/about/IMG_8960-2 (1).jpg"
                  alt="Rough blazing star"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600 italic">Rough blazing star</p>
            </ScrollReveal>
          </div>
        </div>
      </MotionSection>

      {/* My Approach Section with Accordion */}
      <MotionSection id="approach" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">My Therapeutic Approach</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <AccordionItem value="relationship" className="border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-gray-900 hover:no-underline hover:bg-gray-50">
                  Therapeutic relationship
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="prose prose-lg text-gray-700">
                    <p>
                      I center the therapeutic relationship. Healing and growth is most likely to happen in therapy within a relationship of safety, empathy, and collaboration. That is key to having the willingness to explore challenging and vulnerable themes.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="evidence-based" className="border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-gray-900 hover:no-underline hover:bg-gray-50">
                  Evidence Based
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
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
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="what-to-expect" className="border-b-0">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-gray-900 hover:no-underline hover:bg-gray-50">
                  What to expect
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      You are always in charge, and I&apos;m here to help guide you. Initially we&apos;ll meet for 1-2 sessions to better understand the problems and goals you&apos;d like to address. We&apos;ll then develop a treatment plan together and you can decide if I&apos;m a good fit. We&apos;ll check-in regularly to make sure sessions are helpful and adjust as needed. If you or I think another therapist would be a better fit, I&apos;m happy to provide resources and referrals.
                    </p>
                    <p>
                      Regardless of the treatment plan and intervention, I commit to showing up for you with empathy, openness, and care.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Schedule initial consultation</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                You can book a no-cost 20-minute initial consultation with me here. I have telehealth availability in Illinois and Indiana, and in-person sessions in Bloomington, IN.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mb-12">
              <Link
                href="https://calendly.com/blazingstartherapy/initial-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Consultation
              </Link>
            </div>

            {/* Email Contact */}
            <div className="text-center pt-8 border-t border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                You can also email me:
              </p>
              <a
                href="mailto:tucker@blazingstartherapy.com"
                className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                tucker@blazingstartherapy.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </MotionSection>

      {/* Cost Section */}
      <MotionSection className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <CreditCard className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Cost</h2>
            </ScrollReveal>
          </div>

          <div className="space-y-12">
            {/* In-Network Insurance */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">In-network with your insurance</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I&apos;m an in-network provider with the insurances listed below. After the initial consultation I can process an insurance verification to confirm your benefits and out-of-pocket cost, including co-pay or co-insurance. For in-network insurance, the cost is set by the insurance company and the specifics of your plan.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Illinois:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Blue Cross and Blue Shield of Illinois (BCBS-IL) (PPO and Blue Choice)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Cigna</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Aetna</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Indiana:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Cigna</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Aetna</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Out-of-Network and Self-Pay */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Out-of-network and self-pay</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I can also work with you as an out-of-network provider for you to submit to your insurance. For out-of-network and self-pay, the rate is $175 per session.
                </p>
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-3xl font-bold text-gray-900">
                    $175 <span className="text-lg font-normal text-gray-600">per session</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
