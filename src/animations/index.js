// Shared Framer Motion presets used across the whole site.
// Keeping them in one place means every section animates with the same
// rhythm and easing instead of each component inventing its own.

const EASE = [0.22, 1, 0.36, 1]; // expo-out: fast start, soft landing

// Sections reveal once, when ~20% of them has entered the viewport.
export const viewportOnce = { once: true, amount: 0.2 };
// Smaller elements (list rows, cards) need a lower threshold to fire in time.
export const viewportItem = { once: true, amount: 0.35 };

export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

// Images get a subtle zoom-out so they feel like they settle into place.
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.12 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: EASE } },
};

// Put on a parent so its children with `staggerItem` cascade in.
export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// Horizontal variant — used for the capability lists and menu rows.
export const staggerItemX = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

// A divider that draws itself from left to right.
export const drawLine = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Reusable interaction presets.
export const hoverLift = {
  whileHover: { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } },
  whileTap: { scale: 0.98 },
};

export const hoverGrow = {
  whileHover: { scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } },
  whileTap: { scale: 0.96 },
};

// Route-level transition, driven by AnimatePresence in App.
export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.35, ease: "easeIn" } },
};

// Convenience: the three props almost every scroll-revealed block needs.
export const revealProps = (variants = fadeUp, viewport = viewportOnce) => ({
  variants,
  initial: "hidden",
  whileInView: "show",
  viewport,
});
