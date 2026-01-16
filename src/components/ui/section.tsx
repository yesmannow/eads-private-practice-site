"use client";

import { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  background?: "default" | "muted";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  background = "default",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 section-divider ${background === "muted" ? "bg-muted" : "bg-background"} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <Reveal variant="fadeUp">
            <div className="max-w-3xl space-y-3">
              {eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <h2
                  id={id ? `${id}-heading` : undefined}
                  className="text-2xl font-semibold text-foreground sm:text-3xl"
                >
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p className="text-lg leading-8 text-foreground/80">{description}</p>
              ) : null}
            </div>
          </Reveal>
        )}
        <div className="mt-10 space-y-8 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
