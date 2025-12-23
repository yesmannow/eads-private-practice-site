import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
  variant?: "subtle" | "accent";
};

export function IconBadge({
  icon: Icon,
  size = 20,
  className,
  variant = "subtle",
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg ring-1 ring-border/40",
        variant === "subtle"
          ? "bg-muted text-primary"
          : "bg-muted text-accent",
        className
      )}
      style={{ width: `${size + 8}px`, height: `${size + 8}px` }}
    >
      <Icon
        className="shrink-0"
        size={size}
        aria-hidden="true"
      />
    </div>
  );
}

