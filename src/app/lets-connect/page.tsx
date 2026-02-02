import { Metadata } from "next";
import { Calendar, Mail, CreditCard, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Let's Connect | Blazing Star Therapy",
  description: "Schedule a consultation, learn about fees, and get in touch with Tucker Eads, LCSW in Bloomington, IN.",
};

const insuranceProviders = [
  {
    state: "Illinois",
    providers: [
      {
        name: "Blue Cross and Blue Shield of Illinois (BCBS-IL) (PPO and Blue Choice)",
        url: "https://www.bcbsil.com",
      },
      {
        name: "Cigna",
        url: "https://www.cigna.com",
      },
      {
        name: "Aetna",
        url: "https://www.aetna.com",
      },
    ],
  },
  {
    state: "Indiana",
    providers: [
      {
        name: "Cigna",
        url: "https://www.cigna.com",
      },
      {
        name: "Aetna",
        url: "https://www.aetna.com",
      },
    ],
  },
];

export default function LetsConnect() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-accent/90 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Connect</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Begin your journey toward healing and growth with a free consultation
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="md:w-1/3">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/home page/tucker_headshot (1).jpg"
                  alt="Tucker Eads, LCSW"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">Schedule Initial Consultation</h2>
                  </div>
                  <div className="prose text-gray-700 space-y-4">
                    <p>
                      Book a no-cost 20-minute initial consultation with me here. I have telehealth availability in Illinois and Indiana, and in-person sessions in Bloomington, IN.
                    </p>
                    <div className="pt-4">
                      <Link 
                        href="https://blazingstar.sessionshealth.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-[#a8be57] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition duration-300 ease-in-out hover:bg-[#96a84a]"
                      >
                        Book no-cost consultation
                      </Link>
                    </div>
                  </div>

                  <div className="mt-12 flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                    <div className="bg-accent/10 p-3 rounded-full text-accent shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Me</h3>
                      <a 
                        href="mailto:tucker@blazingstartherapy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline transition duration-300 ease-in-out"
                      >
                        tucker@blazingstartherapy.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="sticky top-24">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-accent" />
                        Session Fees
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">In-Network Insurance</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            I&apos;m an in-network provider with the following insurance plans. After the initial consultation, I can verify your benefits and out-of-pocket costs.
                          </p>
                          
                          <div className="space-y-4">
                            {insuranceProviders.map((state, index) => (
                              <div key={index}>
                                <h5 className="font-medium text-gray-800">{state.state}:</h5>
                                <ul className="space-y-1 mt-1">
                                  {state.providers.map((provider, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                      <Link
                                        href={provider.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-colors hover:text-[#3b4a2a]"
                                      >
                                        {provider.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Out-of-Network & Self-Pay</h4>
                          <p className="text-gray-600 text-sm">
                            I can provide superbills for you to submit to your insurance for potential out-of-network reimbursement.
                          </p>
                          <div className="mt-3 p-4 bg-white rounded-lg border border-gray-200">
                            <p className="text-2xl font-bold text-gray-900">$150 <span className="text-base font-normal text-gray-600">per session</span></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-sm text-blue-700">
                        Have questions about fees or insurance? Don&apos;t hesitate to reach out during your free consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Office Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In-person sessions available in Bloomington, Indiana. Telehealth available throughout Illinois and Indiana.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <div className="aspect-video bg-gray-100 relative">
              {/* Replace with your actual office image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                Office Location Map
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Blazing Star Therapy</h3>
              <p className="text-gray-600">123 Therapy Lane, Suite 100</p>
              <p className="text-gray-600">Bloomington, IN 47401</p>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Parking:</span> Free parking available in the lot
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
