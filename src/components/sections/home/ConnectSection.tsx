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
      className="py-24 bg-stone-900 text-stone-50 rounded-t-[3rem] relative z-10"
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
            <h2 className="text-4xl md:text-5xl font-serif text-stone-50 mb-6">
              Schedule initial consultation
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
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
              className="inline-flex items-center justify-center gap-3 bg-stone-50 text-stone-900 px-8 py-5 rounded-full font-bold text-lg hover:bg-stone-200 transition-colors duration-200"
            >
              <Calendar className="w-5 h-5" />
              Book no-cost consultation
            </Link>
            <a
              href="mailto:tucker@blazingstartherapy.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-stone-600 text-stone-50 rounded-full text-center hover:bg-stone-800 transition-colors duration-200 font-semibold"
            >
              <Mail className="w-5 h-5" />
              Email Tucker
            </a>
          </div>

          {/* Email Contact */}
          <div className="pt-8 border-t border-stone-700/50">
            <p className="text-stone-300">
              You can also email me:{" "}
              <a
                href="mailto:tucker@blazingstartherapy.com"
                className="text-stone-50 font-semibold hover:underline underline-offset-4"
              >
                tucker@blazingstartherapy.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Column - Cost & Insurance */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Cost Section */}
          <div className="bg-stone-800/40 p-8 md:p-10 rounded-[2rem] border border-stone-700/50">
            <h3 className="text-2xl font-serif text-stone-50 mb-4">Cost</h3>

            <div className="space-y-6">
              {/* In-network */}
              <div>
                <h4 className="text-lg font-semibold text-stone-50 mb-3">
                  In-network with your insurance
                </h4>
                <p className="text-stone-300 leading-relaxed mb-4">
                  I&apos;m an in-network provider with the insurances listed
                  below. After the initial consultation I can process an
                  insurance verification to confirm your benefits and
                  out-of-pocket cost, including co-pay or co-insurance. For
                  in-network insurance, the cost is set by the insurance company
                  and the specifics of your plan.
                </p>

                {/* Illinois */}
                <div className="mb-4">
                  <h5 className="text-sm uppercase tracking-wider text-stone-400 font-semibold mb-2">
                    Illinois
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {insurancePartners.illinois.map((ins) => (
                      <span
                        key={ins}
                        className="bg-stone-700/60 px-3 py-1.5 rounded-lg text-sm border border-stone-600 text-stone-200"
                      >
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Indiana */}
                <div>
                  <h5 className="text-sm uppercase tracking-wider text-stone-400 font-semibold mb-2">
                    Indiana
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {insurancePartners.indiana.map((ins) => (
                      <span
                        key={ins}
                        className="bg-stone-700/60 px-3 py-1.5 rounded-lg text-sm border border-stone-600 text-stone-200"
                      >
                        {ins}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-stone-700/50"></div>

              {/* Out-of-network */}
              <div>
                <h4 className="text-lg font-semibold text-stone-50 mb-3">
                  Out-of-network and self-pay
                </h4>
                <p className="text-stone-300 leading-relaxed">
                  I can also work with you as an out-of-network provider for you
                  to submit to your insurance. For out-of-network and self-pay,
                  the rate is{" "}
                  <span className="text-stone-50 font-bold">
                    $175 per session
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
