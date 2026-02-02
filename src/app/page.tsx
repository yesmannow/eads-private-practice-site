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
      <section id="home" className="relative min-h-[75vh] md:h-screen flex items-center justify-center overflow-hidden pt-20">
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
          <Link
            href="#about"
            aria-label="Scroll to the about section"
            className="group mt-16 animate-bounce inline-flex flex-col items-center text-white/90 hover:text-white"
          >
            <span className="text-sm mb-2 transition-colors duration-200 group-hover:text-white">Scroll down</span>
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#a8be57]/20" aria-hidden="true" />

      {/* Combined Bio and About Section */}
      <MotionSection id="about" className="py-16 md:py-24 bg-[#a8be57]/10 border-t border-[#a8be57]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="lg:w-5/12 flex flex-col gap-8">
              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-xl shadow-[#a8be57]/20">
                  <div className="relative h-72 w-full md:aspect-[4/5] md:h-auto">
                    <Image
                      src="/images/bio-photo/tucker-bio-photo.jpg"
                      alt="Tucker Eads, LCSW"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-white/50 bg-white/80 p-6 shadow-inner">
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2a19]">Tucker Eads, LCSW</h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    I&apos;m a Licensed Clinical Social Worker (LCSW) with over 7 years of psychotherapy experience. I support people in
                    living a full life despite pain and struggle. Together we can create space to navigate challenges, unwind stress,
                    and move towards purpose.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="hidden lg:block w-px bg-[#a8be57]/40 self-stretch" aria-hidden="true" />

            <div className="lg:w-7/12">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1f2a19]">About</h2>
                <div className="mt-6 space-y-6 text-gray-800">
                  <p>
                    I found this work after seeking support for myself as a young adult at the National Alliance on Mental Illness (NAMI).
                    I then volunteered at NAMI facilitating support and education groups. This inspired me to complete a Master&apos;s in
                    Social Work from the University of Chicago.
                  </p>
                  <p>
                    I enjoyed developing one-on-one therapeutic relationships during my internship on the outpatient mental health team
                    at Mt. Sinai Chicago. This led me to pursue a yearlong psychotherapy fellowship focused on ACT and DBT. During my 5+
                    years as a psychotherapist at Rush University Medical Center I developed an interest and specialty in working with
                    folks experiencing complex medical challenges and chronic pain.
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

      {/* My Approach Section with Accordion */}
      <MotionSection id="approach" className="py-16 md:py-24 bg-[#a8be57]/5 border-t border-[#a8be57]/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1f2a19] text-center">My Therapeutic Approach</h2>
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
                      Healing becomes possible when someone shows up with curiosity, presence, and steady attention. I hold a calm, nonjudgmental space so that you can bring whatever is heavy, confusing, or hopeful, and we can explore it together at your pace.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="approach" className="border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-lg font-bold text-gray-900 hover:no-underline hover:bg-gray-50">
                  Approach
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      My work is informed by Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT), weaving mindfulness, values clarification, and behavioral skills into a context-sensitive framework. I balance practical tools with emotional validation so you can move toward meaningful change even while managing tough feelings or chronic stress.
                    </p>
                    <p>
                      When it feels helpful, we pull from relational and trauma-sensitive practices, somatic awareness, and cognitive processing to match the moment. I partner with you to identify what matters most and craft small experiments that build resilience while honoring your lived experience.
                    </p>
                    <p>
                      Together we stay curious about patterns, broaden your choices, and rehearse new ways of responding so you can step into clarity and agency.
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
                      We begin with 1-2 intake sessions to clarify what brings you here, identify priorities, and make sure we are a good fit. Subsequent sessions follow your rhythm—sometimes steady, sometimes flexible—while keeping your goals and values in view.
                    </p>
                    <p>
                      Regardless of the treatment plan or intervention, I commit to showing up for you with empathy, openness, and care.
                    </p>
                    <p>
                      We talk openly about expectations, coordinate with other providers when helpful, and regularly check in so the work stays relevant and grounded in what actually supports you.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection id="contact" className="py-16 md:py-24 bg-white border-t border-[#a8be57]/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#a8be57]/15 text-[#3b4a2a] mb-6">
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
                  href="https://blazingstar.sessionshealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a8be57] px-8 py-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-[#96a84a] hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book no-cost consultation
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-primary hover:text-primary/80 transition duration-300 ease-in-out"
            >
              tucker@blazingstartherapy.com
            </a>
            </div>
          </ScrollReveal>
        </div>
      </MotionSection>

      {/* Cost Section */}
      <MotionSection className="py-16 md:py-24 bg-[#a8be57]/5 border-t border-[#a8be57]/20">
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
                        <Link
                          href="https://www.bcbsil.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Blue Cross and Blue Shield of Illinois (BCBS-IL) (PPO and Blue Choice)
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.cigna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Cigna
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.aetna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Aetna
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Indiana:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.cigna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Cigna
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <Link
                          href="https://www.aetna.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#3b4a2a] transition-colors"
                        >
                          Aetna
                        </Link>
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
                  I can also work with you as an out-of-network provider for you to submit to your insurance. For out-of-network and self-pay, the rate is $150 per session.
                </p>
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-3xl font-bold text-gray-900">
                    $150 <span className="text-lg font-normal text-gray-600">per session</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MotionSection>

      {/* Blazing Star Section */}
      <MotionSection className="py-16 md:py-24 bg-[#a8be57]/8 border-t border-[#a8be57]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2a19] text-center">What is Blazing Star?</h2>
          </ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,_0.9fr] items-start">
            <ScrollReveal>
              <div className="prose text-gray-800 space-y-4">
                <p>
                  Blazing star, or <em>Liatris</em>, is a genus of durable, prairie-loving perennials. Prairie blazing star (<em>Liatris pycnostachya</em>) bursts purple spikes in midsummer, while rough blazing star (<em>Liatris aspera</em>) tolerates drought and sandy, rocky soil without giving up its brilliance.
                </p>
                <p>
                  These flowers draw bees, butterflies, moths, and even hummingbirds, offering both resilience and gentle movement to the landscape—qualities I mirror in therapy through steady care and curious exploration.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="relative h-60 overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-xl shadow-[#a8be57]/30">
                  <Image
                    src="/images/home page/Liatris_aspera2.jpg"
                    alt="Rough blazing star in bloom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="relative h-60 overflow-hidden rounded-[28px] border border-white/70 bg-white/60 shadow-xl shadow-[#a8be57]/20">
                  <Image
                    src="/images/about/IMG_8960-2 (1).jpg"
                    alt="Prairie blazing star"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <p className="text-sm text-gray-600 italic">
                  <Link
                    href="https://en.wikipedia.org/wiki/Liatris_aspera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4a5c2c] transition duration-300 ease-in-out"
                  >
                    Rough blazing star (Liatris aspera)
                  </Link>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
