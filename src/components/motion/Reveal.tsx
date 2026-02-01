"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useMotionContext } from "./MotionProvider";
import {
  getFadeUp,
  getFadeIn,
  getCardIn,
  DURATION_BASE,
  EASE_OUT,
  getViewportOnce,
} from "@/lib/motion";

type RevealVariant = "fadeUp" | "fadeIn" | "cardIn";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<
  HTMLMotionProps<"div">,
  "variants" | "transition" | "initial" | "whileInView" | "viewport"
>;

export function Reveal({
  as = "div",
  variant = "fadeUp",
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  const { reducedMotion } = useMotionContext();

  const getVariants = () => {
    switch (variant) {
      case "fadeIn":
        return getFadeIn();
      case "cardIn":
        return getCardIn(reducedMotion);
      case "fadeUp":
      default:
        return getFadeUp(reducedMotion);
    }
  };

  const variants = getVariants();
  const duration = reducedMotion ? DURATION_BASE * 0.5 : DURATION_BASE;

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={getViewportOnce()}
      variants={variants}
      transition={{
        duration,
        ease: EASE_OUT,
        delay,
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

