import { Section } from "./section";
import { SiteButton } from "./shadcn/SiteButton";

type CTABandProps = {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: "default" | "inverted";
  className?: string;
};

export function CTABand({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  className = "",
}: CTABandProps) {
  const isInverted = variant === "inverted";

  return (
    <Section background={isInverted ? "default" : "muted"}>
      <div
        className={`rounded-3xl px-8 py-10 shadow-lg ${
          isInverted
            ? "bg-primary text-primary-foreground"
            : "bg-card border border-border"
        } ${className}`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2
              className={`text-2xl font-semibold ${
                isInverted ? "text-primary-foreground" : "text-card-foreground"
              }`}
            >
              {title}
            </h2>
            <p
              className={isInverted ? "text-primary-foreground/80" : "text-muted-foreground"}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SiteButton
              href={primaryAction.href}
              variant={isInverted ? "secondary" : "primary"}
            >
              {primaryAction.label}
            </SiteButton>
            {secondaryAction && (
              <SiteButton
                href={secondaryAction.href}
                variant={isInverted ? "ghost" : "secondary"}
                className={
                  isInverted
                    ? "text-primary-foreground hover:bg-primary-foreground/10 focus-visible:outline-primary-foreground"
                    : ""
                }
              >
                {secondaryAction.label}
              </SiteButton>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

