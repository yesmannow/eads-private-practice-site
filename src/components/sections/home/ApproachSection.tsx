"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

const approaches = [
  {
    title: "Therapeutic relationship",
    content:
      "Healing becomes possible when someone shows up with curiosity, presence, and steady attention. I hold a calm, nonjudgmental space so that you can bring whatever is heavy, confusing, or hopeful, and we can explore it together at your pace.",
  },
  {
    title: "Evidence based",
    content:
      "My work is informed by Acceptance and Commitment Therapy (ACT) and Dialectical Behavior Therapy (DBT), weaving mindfulness, values clarification, and behavioral skills into a context-sensitive framework. I balance practical tools with emotional validation so you can move toward meaningful change.",
  },
  {
    title: "What to expect",
    content:
      "We begin with 1-2 intake sessions to clarify what brings you here, identify priorities, and make sure we are a good fit. Subsequent sessions follow your rhythm—sometimes steady, sometimes flexible—while keeping your goals and values in view.",
  },
];

export function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="approach"
      ref={ref}
      className="relative py-32 bg-[#f4f9f4] rounded-t-[5rem]"
    >
      {/* Decorative botanical divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          className="text-stone-300"
        >
          <path
            d="M60 0 C60 20, 40 20, 20 30 M60 0 C60 20, 80 20, 100 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="60" cy="2" r="3" fill="currentColor" />
          <path
            d="M55 8 Q60 15 65 8"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
            My Therapeutic Approach
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            A therapeutic approach grounded in evidence and compassion
          </p>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {approaches.map((item) => {
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 hover:shadow-2xl hover:shadow-stone-200/60 transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-6"></div>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.content}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Commitment Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 text-center max-w-3xl mx-auto"
        >
          <p className="italic text-xl md:text-2xl font-serif text-stone-700 leading-relaxed">
            Regardless of the treatment plan and intervention, I commit to showing up for you with empathy, openness, and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
