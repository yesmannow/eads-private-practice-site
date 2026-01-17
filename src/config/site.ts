export const site = {
  name: "Blazing Star Therapy",
  tagline:
    "Evidence-based therapy for anxiety, stress, life transitions, and chronic health challenges in Bloomington, Indiana.",
  locationShort: "Bloomington, Indiana",
  telehealthLine: "Telehealth across Indiana & Illinois",
  phone: "(812) 555-0123",
  email: "tucker@blazingstartherapy.com",
  baseUrl: "https://blazingstartherapy.com",
  ctaPrimaryLabel: "Schedule Consultation",
  ctaPrimaryHref: "/lets-connect",
  ctaSecondaryLabel: "Learn My Approach",
  ctaSecondaryHref: "/approach",
};

export const siteConfig = {
  ...site,
  location: site.locationShort,
  contact: {
    phone: site.phone,
    email: site.email,
  },
  practitioner: "Licensed Social Worker",
};

export const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/resources", label: "Resources" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/fees-faq", label: "Fees & FAQ" },
  { href: "/contact", label: "Contact" },
];

export const primaryCtaHref = site.ctaPrimaryHref;
export const secondaryCtaHref = site.ctaSecondaryHref;
