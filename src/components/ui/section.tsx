import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  background?: "default" | "muted";
  children: ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  background = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${background === "muted" ? "bg-slate-50" : ""}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl space-y-3">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                id={id ? `${id}-heading` : undefined}
                className="text-2xl font-semibold text-slate-900 sm:text-3xl"
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-lg leading-8 text-slate-700">{description}</p>
            ) : null}
          </div>
        )}
        <div className="mt-10 space-y-8 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
