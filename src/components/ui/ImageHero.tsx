import Image from "next/image";
import { SiteButton } from "./shadcn/SiteButton";
import { cn } from "@/lib/utils";

type ImageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  priority?: boolean;
  className?: string;
  eyebrow?: string;
};

export function ImageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  priority = false,
  className,
  eyebrow,
}: ImageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-background border-b border-border",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content - Left */}
          <div className="space-y-6 order-1 lg:order-1">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {eyebrow}
              </p>
            )}
            <div>
              <h1 className="text-foreground">{title}</h1>
              {/* Gold accent bar */}
              <div className="mt-2 h-1 w-16 bg-accent rounded-full" />
            </div>
            {subtitle && (
              <p className="text-lg leading-8 text-foreground/80">{subtitle}</p>
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
          </div>

          {/* Image - Right (or below on mobile) */}
          <div className="relative order-2 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-secondary/40 shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

