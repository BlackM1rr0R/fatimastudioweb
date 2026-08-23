import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin bar pinned to the top of the viewport that tracks reading progress.
// Styles are inline on purpose: the rest of the project compiles SCSS to CSS
// as a build step, and this one element does not need to join that pipeline.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "#111",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default ScrollProgress;
