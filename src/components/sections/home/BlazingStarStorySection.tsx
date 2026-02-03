"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

export function BlazingStarStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home page/jeffrey-hamilton-BLo2SfRwxqU-unsplash (1).jpg"
          alt="Prairie landscape"
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-[#1B261D]/85 backdrop-blur-[3px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 italic"
        >
          What is Blazing Star?
        </motion.h2>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1 - Prairie Blazing Star */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/home page/Liatris_aspera2.jpg"
                alt="Prairie Blazing Star flower"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="p-8 text-stone-200 italic leading-relaxed text-lg">
              Prairie blazing star (<em>Liatris pycnostachya</em>) bursts purple
              spikes in midsummer—a mirror for resilient growth.
            </p>
          </motion.div>

          {/* Card 2 - Rough Blazing Star with Monarch */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md md:translate-y-12"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/home page/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg"
                alt="Monarch butterfly on Rough Blazing Star"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="p-8 text-stone-200 italic leading-relaxed text-lg">
              The rough blazing star (<em>Liatris aspera</em>) tolerates rocky,
              sandy soil without giving up its brilliance.
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          These flowers draw bees, butterflies, moths, and even
          hummingbirds—offering both resilience and gentle movement to the
          landscape. Qualities I mirror in therapy through steady care and
          curious exploration.
        </motion.p>

        {/* Source Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://en.wikipedia.org/wiki/Liatris_aspera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white underline underline-offset-8 text-sm transition-colors duration-200"
          >
            Source: Rough blazing star (Liatris aspera)
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
