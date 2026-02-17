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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
        {/* Left column — 1/3: image only */}
        <motion.div
          className="md:col-span-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-stone-200/50 shadow-xl shadow-stone-200/30">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/home page/tucker_headshot (1).jpg"
                alt="Tucker Eads, LCSW"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right column — 2/3: all content */}
        <motion.div
          className="md:col-span-2 space-y-6 text-stone-700 leading-relaxed"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            Tucker Eads, LCSW
          </h2>
          <p className="text-lg md:text-xl text-stone-700">
            I&apos;m a Licensed Clinical Social Worker (LCSW) with over 7 years of psychotherapy experience. I support people in living a full life despite pain and struggle. Together we can create space to navigate challenges, unwind stress, and move towards purpose.
          </p>

          <hr className="border-0 border-t border-stone-300 my-8" aria-hidden />

          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 pt-2">
            About
          </h3>
          <p className="text-base md:text-lg text-stone-600">
            I found this work after seeking support for myself as a young adult at the National Alliance on Mental Illness (NAMI). I then volunteered at NAMI facilitating support and education groups. This inspired me to complete a Master&apos;s in Social Work from the University of Chicago followed by a psychotherapy fellowship.
          </p>
          <p className="text-base md:text-lg text-stone-600">
            During my 5+ years as a psychotherapist at Rush University Medical Center I developed an interest and specialty in working with folks experiencing complex medical challenges and chronic pain.
          </p>
          <p className="text-base md:text-lg text-stone-600">
            Personally, I&apos;m down-to-earth and draw inspiration and joy from live music, nature, organizers and activists, art, food and history. I love to grow food and flowers, ride bikes, and am interested in learning more about native plants and regenerative ecology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
