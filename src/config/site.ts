export const site = {
  name: "Steady Path Counseling",
  tagline:
    "Evidence-informed therapy and care navigation to support health, adjustment, and emotional wellbeing.",
  locationShort: "Bloomington, Indiana",
  telehealthLine: "Telehealth across Indiana",
  phone: "(555) 555-5555",
  email: "hello@steadypathcounseling.com",
  baseUrl: "https://example.com",
  ctaPrimaryLabel: "Request a Consultation",
  ctaPrimaryHref: "/start-here",
  ctaSecondaryLabel: "View Services",
  ctaSecondaryHref: "/services",
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
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/fees-faq", label: "Fees & FAQ" },
  { href: "/contact", label: "Contact" },
];

export const primaryCtaHref = site.ctaPrimaryHref;
export const secondaryCtaHref = site.ctaSecondaryHref;
