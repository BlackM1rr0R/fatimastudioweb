import React, { useRef } from "react";
import styles from "./index.module.css";
import FatimaPhoto from "../../assets/images/image111.png";
import FigmaPhoto from "../../assets/images/figmaaaaa.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "../../animations";

const FatimaFigma = () => {
  const sectionRef = useRef(null);
  // Track this section's own progress through the viewport so the two images
  // can drift past each other at different speeds.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div className={styles.background} ref={sectionRef}>
      <div className={styles.control}>
        <motion.div
          className={styles.photoFatima}
          style={{ y: leftY }}
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ scale: 1.03 }}
        >
          <img src={FatimaPhoto} alt="" />
        </motion.div>
        <motion.div
          className={styles.figmaPhoto}
          style={{ y: rightY }}
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ scale: 1.03 }}
        >
          <img src={FigmaPhoto} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default FatimaFigma;
