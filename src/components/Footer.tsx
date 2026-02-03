import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { Heart, Phone, Mail, MapPin, Flower2, Users, Shield, Clock, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1B261D] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">

            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/branding/bst-website-logo.png"
                  alt="Blazing Star Therapy logo"
                  width={60}
                  height={60}
                  className="brightness-0 invert"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{site.name}</h3>
                  <p className="text-sm text-slate-300">LCSW</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                {site.tagline}
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Flower2 className="w-4 h-4" />
                <span>Named after the native blazing star flower</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/approach" className="text-slate-300 hover:text-white transition-colors text-sm">
                    My Therapeutic Approach
                  </Link>
                </li>
                <li>
                  <Link href="/specialties" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Areas of Focus
                  </Link>
                </li>
                <li>
                  <Link href="/lets-connect" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Schedule Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/fees-faq" className="text-slate-300 hover:text-white transition-colors text-sm">
                    Fees & FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Location */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium">In-Person</p>
                    <p className="text-slate-400 text-sm">{site.locationShort}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Telehealth</p>
                    <p className="text-slate-400 text-sm">{site.telehealthLine}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <Link
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {site.phone}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <Link
                    href={`mailto:${site.email}`}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {site.email}
                  </Link>
                </div>
              </div>
            </div>

            {/* Crisis Resources & Support */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Crisis Support
              </h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">988</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">988 Suicide & Crisis Lifeline</p>
                      <p className="text-slate-400 text-xs">24/7 support</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Call or text 988 for immediate crisis support. Available 24/7 across the United States.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">911</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Emergency Services</p>
                      <p className="text-slate-400 text-xs">For immediate danger</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Call 911 if you or someone else is in immediate danger.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Office Hours
                </h5>
                <ul className="text-slate-400 text-xs space-y-1">
                  <li>Monday - Friday: 9 AM - 6 PM</li>
                  <li>Saturday: By appointment</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Insurance
                </h5>
                <p className="text-slate-400 text-xs leading-relaxed">
                  In-network with Cigna, Aetna, and Blue Cross Blue Shield in Illinois & Indiana. Superbills available for out-of-network reimbursement.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Professional
                </h5>
                <ul className="text-slate-400 text-xs space-y-1">
                  <li>Licensed Clinical Social Worker</li>
                  <li>7+ years experience</li>
                  <li>ACT & DBT trained</li>
                  <li>Chronic illness specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} {site.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/accessibility" className="text-slate-400 hover:text-white transition-colors">
                    Accessibility
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-slate-500 text-xs">
                  Designed with <Heart className="w-3 h-3 inline text-red-400" /> for mental wellness
                </p>
                <div className="flex items-center gap-2">
                  <Flower2 className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-500 text-xs">Bloomington, IN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
