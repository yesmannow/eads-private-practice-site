"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";
import { useMotionContext } from "./MotionProvider";
import { getStaggerContainer, standardTransition } from "@/lib/motion";

type AsProp = 'div' | 'section' | 'ul' | 'ol' | 'nav' | 'main' | 'article' | 'aside' | 'header' | 'footer';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: AsProp;
}

export function Stagger({ children, className = "", as = "div" }: StaggerProps) {
  const { reducedMotion } = useMotionContext();
  const variants = getStaggerContainer(reducedMotion);

  const MotionComponent = motion[as] as React.ComponentType<{
    className?: string;
    variants?: Variants;
    initial?: string;
    animate?: string;
    transition?: Transition;
    children: ReactNode;
  }>;

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={standardTransition}
    >
      {children}
    </MotionComponent>
  );
}