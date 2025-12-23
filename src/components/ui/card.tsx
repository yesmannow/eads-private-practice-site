import { ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { IconBadge } from "./IconBadge";

type CardProps = {
  title?: string;
  eyebrow?: string;
  icon?: LucideIcon;
  children: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, eyebrow, icon: Icon, children, footer }: CardProps) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {(eyebrow || title || Icon) && (
        <div className="space-y-1">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">{eyebrow}</p> : null}
          {title && (
            <div className="flex items-center gap-3">
              {Icon && <IconBadge icon={Icon} size={20} variant="subtle" />}
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
          )}
        </div>
      )}
      <div className="mt-4 space-y-3 text-slate-800">{children}</div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </div>
  );
}
