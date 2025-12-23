import { ReactNode } from "react";

type CardProps = {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, eyebrow, children, footer }: CardProps) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {(eyebrow || title) && (
        <div className="space-y-1">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">{eyebrow}</p> : null}
          {title ? <h3 className="text-lg font-semibold text-slate-900">{title}</h3> : null}
        </div>
      )}
      <div className="mt-4 space-y-3 text-slate-800">{children}</div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
