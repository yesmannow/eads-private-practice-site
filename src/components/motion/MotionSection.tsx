"use client";

import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { fadeUp, standardTransition, viewportOnce } from "@/lib/motion";

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "variants" | "transition" | "initial" | "animate" | "whileInView" | "viewport">;

export function MotionSection({
  children,
  className,
  as = "section",
  delay = 0,
  ...props
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is enabled, render without animation
  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} {...(props as React.HTMLAttributes<HTMLElement>)}>
        {children}
      </Component>
    );
  }

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{
        ...standardTransition,
        delay,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

