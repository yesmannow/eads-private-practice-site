// Re-export commonly used UI primitives for cleaner imports
// Prefer shadcn variants where they exist

// Layout & Structure
export { Section } from "./section";
export { Card } from "../Card";

// Premium Components
export { PageHero } from "./PageHero";
export { ImageHero } from "./ImageHero";
export { SectionHeading } from "./SectionHeading";
export { FeatureCard } from "./FeatureCard";
export { Callout } from "./Callout";
export { CTABand } from "./CTABand";

// Buttons
export { Button } from "./button"; // Re-exports SiteButton
export { SiteButton } from "./shadcn/SiteButton";
export { buttonVariants } from "./shadcn/button";

// Form Components (shadcn)
export { Checkbox } from "./shadcn/checkbox";
export { Label } from "./shadcn/label";
export { Textarea } from "./shadcn/textarea";
export { Input } from "./shadcn/input";
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./shadcn/select";

// Dialog & Sheet
export {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./shadcn/sheet";
export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./shadcn/dialog";

// Other
export { SiteLink } from "./shadcn/SiteLink";

