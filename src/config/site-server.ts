import 'server-only';
import { getContentFile } from '@/lib/content';
import type { SiteSettings, Navigation } from '@/lib/content-types';

// Load site settings from content file
let siteSettings: SiteSettings | null = null;
let navigationData: Navigation | null = null;

// Function to load site settings (cached)
export async function getSiteSettings(): Promise<SiteSettings> {
  if (siteSettings) return siteSettings;

  try {
    siteSettings = await getContentFile<SiteSettings>('site-settings.json');
    return siteSettings;
  } catch (error) {
    console.warn('Failed to load site-settings.json, using defaults');
    // Return default structure matching SiteSettings type
    return {
      name: "Blazing Star Therapy",
      tagline: "Evidence-based therapy for anxiety, stress, life transitions, and chronic health challenges in Bloomington, Indiana.",
      baseUrl: "https://blazingstartherapy.com",
      contact: {
        phone: "(812) 555-0123",
        email: "tucker@blazingstartherapy.com",
        locationShort: "Bloomington, Indiana",
        telehealthLine: "Telehealth across Indiana & Illinois",
      },
      ctaPrimary: {
        label: "Schedule Consultation",
        href: "/lets-connect",
      },
      ctaSecondary: {
        label: "Learn My Approach",
        href: "/approach",
      },
      practitioner: "Licensed Clinical Social Worker",
      officeHours: {
        mondayFriday: "9 AM - 6 PM",
        saturday: "By appointment",
        sunday: "Closed",
      },
      insurance: "In-network with Cigna, Aetna, and Blue Cross Blue Shield in Illinois & Indiana. Superbills available for out-of-network reimbursement.",
      credentials: {
        title: "Licensed Clinical Social Worker",
        experience: "7+ years experience",
        specialties: "ACT & DBT trained, Chronic illness specialist",
      },
    };
  }
}

// Function to load navigation (cached)
export async function getNavigation(): Promise<Navigation> {
  if (navigationData) return navigationData;

  try {
    navigationData = await getContentFile<Navigation>('navigation.json');
    return navigationData;
  } catch (error) {
    console.warn('Failed to load navigation.json, using defaults');
    return {
      items: [
        { href: "/", label: "Home" },
        { href: "/approach", label: "My Approach" },
        { href: "/about", label: "About" },
        { href: "/specialties", label: "Specialties" },
        { href: "/contact", label: "Let's Connect" },
      ],
    };
  }
}
