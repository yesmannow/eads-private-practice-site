import { Variants, Transition } from "framer-motion";

/**
 * Standard transition for subtle, professional animations
 * Duration: 0.35-0.5s, ease out (no bouncy spring)
 */
export const standardTransition: Transition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1], // ease-out-expo
};

/**
 * Fade up animation variant
 * Initial: opacity 0, y 12
 * Animate: opacity 1, y 0
 */
export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

/**
 * Fade in animation variant (opacity only)
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

/**
 * Stagger container variant
 * Stagger children with 0.06-0.12s delay
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/**
 * Viewport settings for scroll-triggered animations
 * Once: true (animate only once when in view)
 * Amount: 0.2 (trigger when 20% visible)
 */
export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const;

