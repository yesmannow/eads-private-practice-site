import {
  HeartHandshake,
  Users,
  Compass,
  ClipboardCheck,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "individual-therapy": HeartHandshake,
  "caregiver-support": Users,
  "care-navigation": Compass,
};

export const toolIcons: Record<string, LucideIcon> = {
  "fit-check": ClipboardCheck,
  "prepare-checklist": ListChecks,
  "care-navigation-planner": Compass,
};

export type ServiceIconKey = keyof typeof serviceIcons;
export type ToolIconKey = keyof typeof toolIcons;

