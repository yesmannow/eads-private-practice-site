import { site } from "@/config/site";

export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.baseUrl,
    areaServed: {
      "@type": "State",
      name: "Indiana",
    },
    serviceType: [
      "Psychotherapy",
      "Care Navigation",
      "Caregiver Support",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bloomington",
      addressRegion: "IN",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      telephone: site.phone,
      contactType: "Customer Service",
    },
  };
}

export function getFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

