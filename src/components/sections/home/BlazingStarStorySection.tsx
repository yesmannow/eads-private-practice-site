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
    <section
      id="blazing-star"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden text-white rounded-t-[3rem]"
    >
      {/* Immersive Blended Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home page/jeffrey-hamilton-BLo2SfRwxqU-unsplash (1).jpg"
          alt="Prairie landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B261D]/80 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column - Text */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white">
            What is Blazing Star?
          </h2>
          <p className="text-xl text-stone-300 leading-relaxed">
            Blazing star, or <em>Liatris</em>, is a genus of perennial flowers
            native to North America. Prairie blazing star (
            <em>Liatris pycnostachya</em>) is an iconic prairie plant, blooming
            from midsummer onward. Rough blazing star (<em>Liatris aspera</em>)
            is hardy and tolerates drought and sandy and rocky soil. Blazing
            stars host numerous pollinators including bees, butterflies, moths,
            and even hummingbirds.
          </p>
        </motion.div>

        {/* Right Column - Featured Image */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative aspect-square md:aspect-[4/5] w-full">
              <Image
                src="/images/home page/Monarch_on_Rough_Blazing_Star_(42664211220) (1).jpg"
                alt="Monarch butterfly on Rough Blazing Star"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="text-center">
            <Link
              href="https://en.wikipedia.org/wiki/Liatris_aspera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white underline underline-offset-8 text-sm transition-colors duration-200"
            >
              Rough blazing star
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
