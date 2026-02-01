import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl space-y-3 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-foreground">{title}</h2>
      {description && (
        <p className="text-lg leading-8 text-foreground/80">{description}</p>
      )}
      {children}
    </div>
  );
}

