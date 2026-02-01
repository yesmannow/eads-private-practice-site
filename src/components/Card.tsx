import { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm card-interactive">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-4 space-y-3 text-card-foreground">{children}</div>
    </div>
  );
}
