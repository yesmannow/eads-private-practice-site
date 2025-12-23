import {
  HeartHandshake,
  Users,
  Compass,
  ClipboardCheck,
  ListChecks,
  MessageCircle,
  Library,
  type LucideIcon,
} from "lucide-react";

// Service icons
export const serviceIcons: Record<string, LucideIcon> = {
  "individual-therapy": HeartHandshake,
  "caregiver-support": Users,
  "care-navigation": Compass,
};

// Tool icons
export const toolIcons: Record<string, LucideIcon> = {
  "fit-check": ClipboardCheck,
  "prepare-checklist": ListChecks,
  "care-navigation-planner": Compass,
};

// Named icon exports for direct use
export const IconTherapy = HeartHandshake;
export const IconCaregiver = Users;
export const IconCareNavigation = Compass;
export const IconFitCheck = ClipboardCheck;
export const IconPrepare = ListChecks;
export const IconContact = MessageCircle;
export const IconResources = Library;

export type ServiceIconKey = keyof typeof serviceIcons;
export type ToolIconKey = keyof typeof toolIcons;

