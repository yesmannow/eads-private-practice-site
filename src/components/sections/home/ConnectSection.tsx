"use client";

import Link from "next/link";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail } from "lucide-react";

const insurancePartners = {
  illinois: [
    "Blue Cross and Blue Shield of Illinois (BCBS-IL) (PPO and Blue Choice)",
    "Cigna",
    "Aetna",
  ],
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
      className="py-24 bg-[#945d97]/80 text-white rounded-t-[3rem] relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column - Schedule */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Schedule initial consultation
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              You can book a no-cost 20-minute initial consultation with me
              here. I have telehealth availability in Illinois and Indiana, and
              in-person sessions in Bloomington, IN.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="https://blazingstar.sessionshealth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#945d97] px-8 py-5 rounded-full font-bold text-lg hover:bg-[#f3e5f0] transition-colors duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book no-cost consultation
            </Link>
            <a
              href="mailto:tucker@blazingstartherapy.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-white text-white rounded-full text-center hover:bg-[#7a4a7a] transition-colors duration-200 font-semibold"
            >
              <Mail className="w-5 h-5" />
              Email Tucker
            </a>
          </div>

          {/* Email Contact */}
          <div className="pt-8 border-t border-white/50">
            <p className="text-white/90">
              You can also email me:{" "}
              <a
                href="mailto:tucker@blazingstartherapy.com"
                className="text-white font-semibold hover:underline underline-offset-4"
              >
                tucker@blazingstartherapy.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Column - Insurance */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Insurance partners
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              I am in-network with the following insurance providers:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Illinois
              </h3>
              <ul className="text-white/90 space-y-2">
                {insurancePartners.illinois.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Indiana</h3>
              <ul className="text-white/90 space-y-2">
                {insurancePartners.indiana.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
