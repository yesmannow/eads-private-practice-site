import {
  HeartHandshake,
  Users,
  Compass,
  ClipboardCheck,
  ListChecks,
  MessageCircle,
  Library,
  Calendar,
  FileText,
  CheckCircle2,
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

// Step icons for "How it Works" and "What to Expect" sections
export const stepIcons: Record<string, LucideIcon> = {
  "initial-contact": MessageCircle,
  "consultation": Calendar,
  "care-plan": FileText,
  "first-appointment": CheckCircle2,
};

// Helper function to get an icon by key
export function getIcon(
  category: "service" | "tool" | "step",
  key: string
): LucideIcon | null {
  const maps = {
    service: serviceIcons,
    tool: toolIcons,
    step: stepIcons,
  };
  return maps[category][key] || null;
}

export type ServiceIconKey = keyof typeof serviceIcons;
export type ToolIconKey = keyof typeof toolIcons;
export type StepIconKey = keyof typeof stepIcons;

