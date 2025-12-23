"use client";

import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { fadeUp, standardTransition } from "@/lib/motion";

type MotionItemProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "variants" | "transition" | "initial" | "animate">;

export function MotionItem({
  children,
  className,
  delay = 0,
  ...props
}: MotionItemProps) {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is enabled, render without animation
  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{
        ...standardTransition,
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

