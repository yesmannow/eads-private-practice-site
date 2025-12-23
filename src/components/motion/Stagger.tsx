"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useMotionContext } from "./MotionProvider";
import { getStaggerContainer, getViewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StaggerProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport">;

export function Stagger({ as = "div", className, children, ...props }: StaggerProps) {
  const { reducedMotion } = useMotionContext();
  const variants = getStaggerContainer(reducedMotion);

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      className={cn(className)}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={getViewportOnce()}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

