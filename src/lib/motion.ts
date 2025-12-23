import { Variants, Transition } from "framer-motion";

/**
 * Animation duration constants
 */
export const DURATION_FAST = 0.18;
export const DURATION_BASE = 0.24;
export const DURATION_SLOW = 0.32;

/**
 * Standard easing curve (ease-out-expo)
 */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Standard transition for subtle, professional animations
 */
export const standardTransition: Transition = {
  duration: DURATION_BASE,
  ease: EASE_OUT,
};

/**
 * Viewport settings for scroll-triggered animations
 * Once: true (animate only once when in view)
 * Amount: 0.2 (trigger when 20% visible)
 */
export const getViewportOnce = () => ({
  once: true,
  amount: 0.2,
} as const);

/**
 * Legacy export for backward compatibility
 */
export const viewportOnce = getViewportOnce();

/**
 * Get animation variants with reduced motion support
 */
export const getFadeUp = (reducedMotion = false): Variants => ({
  initial: {
    opacity: 0,
    ...(reducedMotion ? {} : { y: 10 }),
  },
  animate: {
    opacity: 1,
    ...(reducedMotion ? {} : { y: 0 }),
  },
});

/**
 * Fade up animation variant (default, no reduced motion)
 */
export const fadeUp: Variants = getFadeUp(false);

/**
 * Get fade in animation variant (opacity only)
 */
export const getFadeIn = (reducedMotion = false): Variants => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
});

/**
 * Fade in animation variant (default)
 */
export const fadeIn: Variants = getFadeIn(false);

/**
 * Get card in animation variant (opacity + y + scale)
 */
export const getCardIn = (reducedMotion = false): Variants => ({
  initial: {
    opacity: 0,
    ...(reducedMotion ? {} : { y: 12, scale: 0.99 }),
  },
  animate: {
    opacity: 1,
    ...(reducedMotion ? {} : { y: 0, scale: 1 }),
  },
});

/**
 * Card in animation variant (default)
 */
export const cardIn: Variants = getCardIn(false);

/**
 * Get stagger container variant
 */
export const getStaggerContainer = (reducedMotion = false): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: reducedMotion ? 0.03 : 0.06,
      delayChildren: reducedMotion ? 0.02 : 0.05,
    },
  },
});

/**
 * Stagger container variant (default)
 */
export const staggerContainer: Variants = getStaggerContainer(false);

