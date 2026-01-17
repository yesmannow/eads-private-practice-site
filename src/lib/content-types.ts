/**
 * Type definitions for content files
 * These types are safe to import in client components
 */
export interface SiteSettings {
  name: string;
  tagline: string;
  baseUrl: string;
  contact: {
    phone: string;
    email: string;
    locationShort: string;
    telehealthLine: string;
  };
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  practitioner: string;
  officeHours: {
    mondayFriday: string;
    saturday: string;
    sunday: string;
  };
  insurance: string;
  credentials: {
    title: string;
    experience: string;
    specialties: string;
  };
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface Navigation {
  items: NavigationItem[];
}

export interface HomepageContent {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryButton: {
      label: string;
      href: string;
    };
    secondaryButton: {
      label: string;
      href: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  aboutPreview: {
    title: string;
    paragraphs: Array<{
      text: string;
    }>;
    quote: string;
    headshotImage: string;
    ctaLink: string;
  };
}

export interface AboutPageContent {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  story: {
    title: string;
    paragraphs: Array<{
      text: string;
    }>;
    images?: Array<{
      image: string;
      alt: string;
    }>;
  };
  blazingStar: {
    title: string;
    paragraphs: Array<{
      text: string;
    }>;
    image?: string;
    imageCaption?: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
  slug: string;
  category: 'general' | 'fees' | 'services' | 'scheduling' | 'policies';
  order: number;
}

export interface FeesPolicies {
  sessionFee: string;
  sessionLength: string;
  consultationInfo: string;
  insuranceAccepted: Array<{
    provider: string;
    states: string;
  }>;
  superbillInfo: string;
  cancellationPolicy: string;
  paymentMethods: Array<{
    method: string;
  }>;
}

export interface Specialty {
  title: string;
  slug: string;
  category: 'individual' | 'caregiver' | 'navigation' | 'focus';
  description: string;
  image?: string;
  order: number;
}

export interface Resource {
  title: string;
  slug: string;
  date: string;
  category?: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
}

export interface PrivacyPolicyContent {
  title: string;
  hero: {
    title: string;
    subtitle: string;
  };
  privacySection: {
    title: string;
    informationCollection: {
      title: string;
      paragraphs: Array<{
        text: string;
      }>;
    };
    cookiesAnalytics: {
      title: string;
      paragraphs: Array<{
        text: string;
      }>;
    };
    telehealthCommunication: {
      title: string;
      content: string;
    };
  };
  termsSection: {
    title: string;
    content: string;
  };
  accessibilitySection: {
    title: string;
    content: string;
  };
}
