import { site } from "@/config/site";
import { Button } from "../ui/button";

const trustItems = [
  "Individual psychotherapy",
  "Caregiver support",
  "Care navigation and coordination support",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Serving {site.locationShort} · {site.telehealthLine}
            </p>
            <h1 className="text-foreground">
              {site.name}
            </h1>
            <p className="text-lg leading-8 text-foreground/80">{site.tagline}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.ctaPrimaryHref}>{site.ctaPrimaryLabel}</Button>
              <Button href={site.ctaSecondaryHref} variant="secondary">
                {site.ctaSecondaryLabel}
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-sm"
                >
                  <p className="font-medium text-card-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card/90 p-8 shadow-lg backdrop-blur">
              <div className="space-y-4 text-card-foreground">
                <p className="text-sm font-semibold text-accent">Care navigation as core support</p>
                <p className="text-lg font-semibold text-card-foreground">
                  Clear guidance for complex systems
                </p>
                <p className="text-base leading-7">
                  Navigate referrals, care coordination, and next steps with calm, structured support.
                  Sessions focus on symptom relief, coping skills, and concrete planning.
                </p>
                <div className="rounded-2xl bg-muted p-4 text-sm leading-6 text-muted-foreground">
                  <p className="font-semibold text-foreground">Safety note</p>
                  <p>
                    This practice is not an emergency service. If you need immediate help, call 911 or
                    text/call 988 in the U.S.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
