import { ReactNode } from "react";
import { SiteButton } from "./shadcn/SiteButton";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
};

export function PageHero({
  title,
  description,
  eyebrow,
  primaryAction,
  secondaryAction,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-background to-gray-50/50 border-b border-border relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 relative">
        <div className="max-w-3xl space-y-6">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-foreground">{title}</h1>
          {description && (
            <p className="text-lg leading-8 text-foreground/80">{description}</p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryAction && (
                <SiteButton href={primaryAction.href} variant="primary">
                  {primaryAction.label}
                </SiteButton>
              )}
              {secondaryAction && (
                <SiteButton href={secondaryAction.href} variant="secondary">
                  {secondaryAction.label}
                </SiteButton>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

