// Client-safe exports - no server-only imports
// For server-side functions, import from '@/config/site-server'

// Default fallback values
const defaultSite = {
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

// Legacy exports for backward compatibility (will use defaults if content not loaded)
export const site = {
  name: defaultSite.name,
  tagline: defaultSite.tagline,
  locationShort: defaultSite.locationShort,
  telehealthLine: defaultSite.telehealthLine,
  phone: defaultSite.phone,
  email: defaultSite.email,
  baseUrl: defaultSite.baseUrl,
  ctaPrimaryLabel: defaultSite.ctaPrimaryLabel,
  ctaPrimaryHref: defaultSite.ctaPrimaryHref,
  ctaSecondaryLabel: defaultSite.ctaSecondaryLabel,
  ctaSecondaryHref: defaultSite.ctaSecondaryHref,
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
  { href: "/", label: "Home" },
  { href: "/approach", label: "My Approach" },
  { href: "/about", label: "About" },
  { href: "/specialties", label: "Specialties" },
  { href: "/contact", label: "Let's Connect" },
];

export const primaryCtaHref = site.ctaPrimaryHref;
export const secondaryCtaHref = site.ctaSecondaryHref;
