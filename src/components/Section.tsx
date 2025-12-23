import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  background?: "default" | "muted";
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${background === "muted" ? "bg-slate-50" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-900">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className="text-lg leading-8 text-slate-700">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-10 space-y-6 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
