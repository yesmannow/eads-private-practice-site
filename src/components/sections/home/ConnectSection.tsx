"use client";

import Link from "next/link";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail } from "lucide-react";

const insurancePartners = {
  illinois: ["BCBS Illinois (PPO & Blue Choice)", "Cigna", "Aetna"],
  indiana: ["Cigna", "Aetna"],
};

export function ConnectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="connect"
      ref={ref}
      className="py-24 bg-stone-900 text-stone-50 rounded-t-[4rem] relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column - CTA */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Connect & Consult
            </h2>
            <p className="text-xl text-stone-400 leading-relaxed">
              20-minute no-cost consultations available for Illinois and Indiana
              residents. Let&apos;s explore whether we&apos;re a good fit.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="https://blazingstar.sessionshealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-stone-50 text-stone-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </Link>
            <a
              href="mailto:tucker@blazingstartherapy.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-stone-700 rounded-full text-center hover:bg-stone-800 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              Direct Email
            </a>
          </div>

          {/* Rate Info */}
          <div className="pt-8 border-t border-stone-700/50">
            <p className="text-stone-400 text-sm">
              Out-of-network and self-pay rate:{" "}
              <span className="text-stone-200 font-semibold">
                $150 per session
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Column - Insurance Info */}
        <motion.div
          className="bg-stone-800/40 p-10 md:p-12 rounded-[2.5rem] border border-stone-700/50"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-2xl font-serif mb-8 border-b border-stone-700 pb-4">
            Insurance Partners
          </h3>

          {/* Illinois */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-stone-500 font-semibold mb-3">
              Illinois
            </h4>
            <div className="flex flex-wrap gap-3">
              {insurancePartners.illinois.map((ins) => (
                <span
                  key={ins}
                  className="bg-stone-700/50 px-4 py-2 rounded-lg text-sm border border-stone-600 text-stone-200"
                >
                  {ins}
                </span>
              ))}
            </div>
          </div>

          {/* Indiana */}
          <div className="mb-8">
            <h4 className="text-sm uppercase tracking-wider text-stone-500 font-semibold mb-3">
              Indiana
            </h4>
            <div className="flex flex-wrap gap-3">
              {insurancePartners.indiana.map((ins) => (
                <span
                  key={ins}
                  className="bg-stone-700/50 px-4 py-2 rounded-lg text-sm border border-stone-600 text-stone-200"
                >
                  {ins}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-stone-500 italic leading-relaxed">
            Verification of benefits and out-of-pocket costs provided after
            initial consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
