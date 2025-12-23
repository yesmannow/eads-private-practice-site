import { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {subtitle ? (
          <p className="text-sm text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      <div className="mt-4 space-y-3 text-slate-700">{children}</div>
    </div>
  );
}
