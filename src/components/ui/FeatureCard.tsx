import { ReactNode } from "react";
import Link from "next/link";
import { Card } from "../Card";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  footer?: ReactNode;
};

export function FeatureCard({
  title,
  description,
  href,
  icon,
  footer,
}: FeatureCardProps) {
  const content = (
    <div className="h-full">
      {icon && <div className="mb-3">{icon}</div>}
      <Card title={title}>
        <p className="text-slate-600">{description}</p>
        {footer && <div className="mt-4">{footer}</div>}
      </Card>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block h-full transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
      >
        {content}
      </Link>
    );
  }

  return content;
}

