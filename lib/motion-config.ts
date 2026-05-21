// Core spring physics.
// Animations should feel quick and responsive, with spring-based motion.

export const SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

/** Softer spring for larger layout shifts. */
export const SPRING_SOFT = {
  type: "spring" as const,
  stiffness: 200,
  damping: 26,
};

/** Extra-snappy spring for micro-interactions such as hovers and toggles. */
export const SPRING_SNAPPY = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
};

// Reusable variants.

export const FADE_UP = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
};

// Backward-compatible aliases for older template components.
export const SPRING_CONFIG = SPRING;
export const POP_IN_VARIANT = SCALE_IN;
export const GENERAL_VARIANT = FADE_UP;

/** Stagger container. Use with variants on child elements. */
export const STAGGER_CONTAINER = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.06,
    },
  },
};
