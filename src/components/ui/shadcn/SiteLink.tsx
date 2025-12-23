import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SiteLinkProps = ComponentProps<typeof Link> & {
  variant?: "default" | "muted" | "primary";
};

const variantStyles = {
  default: "text-foreground hover:text-accent underline underline-offset-2 hover:underline-offset-4 transition-colors",
  muted: "text-muted-foreground hover:text-foreground transition-colors",
  primary: "text-primary hover:text-accent underline underline-offset-2 hover:underline-offset-4 transition-colors font-medium",
};

export function SiteLink({
  className,
  variant = "default",
  ...props
}: SiteLinkProps) {
  return (
    <Link
      className={cn(
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

