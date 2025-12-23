import { ReactNode } from "react";

type CalloutVariant = "info" | "warning" | "success" | "neutral";

type CalloutProps = {
  title?: string;
  children: ReactNode;
  variant?: CalloutVariant;
  className?: string;
};

const variantStyles: Record<CalloutVariant, string> = {
  info: "border-sky-200 bg-sky-50",
  warning: "border-amber-200 bg-amber-50",
  success: "border-green-200 bg-green-50",
  neutral: "border-slate-200 bg-slate-50",
};

const variantTitleStyles: Record<CalloutVariant, string> = {
  info: "text-sky-900",
  warning: "text-amber-900",
  success: "text-green-900",
  neutral: "text-slate-900",
};

export function Callout({
  title,
  children,
  variant = "neutral",
  className = "",
}: CalloutProps) {
  return (
    <div
      className={`rounded-2xl border p-6 ${variantStyles[variant]} ${className}`}
    >
      {title && (
        <h3 className={`mb-3 text-lg font-semibold ${variantTitleStyles[variant]}`}>
          {title}
        </h3>
      )}
      <div className="text-slate-700">{children}</div>
    </div>
  );
}

