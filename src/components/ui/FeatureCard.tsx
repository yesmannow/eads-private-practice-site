import { ReactNode } from "react";
import Link from "next/link";
import { Card } from "../Card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  href,
  icon,
  footer,
  className,
}: FeatureCardProps) {
  const content = (
    <div className={cn("h-full", className)}>
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-accent">
          {icon}
        </div>
      )}
      <Card title={title}>
        <p className="text-foreground/80">{description}</p>
        {footer && <div className="mt-4">{footer}</div>}
      </Card>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block h-full transition-transform hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {content}
      </Link>
    );
  }

  return content;
}

