"use client";

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutTuckerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 bg-[#fdfcf8] rounded-[3rem] mx-4 my-8 shadow-sm border border-stone-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Left Column - Photo, Name & Intro Pull-Quote */}
        <motion.div
          className="md:col-span-5 space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Photo */}
          <div className="relative overflow-hidden rounded-2xl border border-stone-200/50 shadow-xl shadow-stone-200/30">
            <div className="relative aspect-square md:aspect-[4/5] w-full">
              <Image
                src="/images/home page/tucker_headshot (1).jpg"
                alt="Tucker Eads, LCSW"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Name & Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            Tucker Eads, LCSW
          </h2>

          {/* Intro Pull-Quote */}
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 italic border-l-8 border-stone-200 pl-8">
            &ldquo;I&apos;m a Licensed Clinical Social Worker (LCSW) with over 7 years of psychotherapy experience. I support people in living a full life despite pain and struggle. Together we can create space to navigate challenges, unwind stress, and move towards purpose.&rdquo;
          </p>
        </motion.div>

        {/* Right Column - About Bio */}
        <motion.div
          className="md:col-span-7 space-y-6 text-stone-600 text-lg leading-relaxed font-sans"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900">
            About
          </h3>

          <p>
            I found this work after seeking support for myself as a young adult at the National Alliance on Mental Illness (NAMI). I then volunteered at NAMI facilitating support and education groups. This inspired me to complete a Master&apos;s in Social Work from the University of Chicago. I enjoyed developing one-on-one therapeutic relationships during my internship on the outpatient mental health team at Mt. Sinai Chicago. This led me to pursue a yearlong psychotherapy fellowship focused on ACT and DBT.
          </p>

          <p>
            During my 5+ years as a psychotherapist at Rush University Medical Center I developed an interest and specialty in working with folks experiencing complex medical challenges and chronic pain.
          </p>

          <p className="pt-6 border-t border-stone-100 italic text-stone-500">
            Personally, I&apos;m down-to-earth and draw inspiration and joy from live music, nature, organizers and activists, art, food and history. I love to grow food and flowers, ride bikes, and am interested in learning more about native plants and regenerative ecology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
