import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import {
  fadeLeft,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../animations";

const Build = () => {
  return (
    <div className={styles.background}>
      <motion.div
        className={styles.control}
        variants={staggerContainer(0.18)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className={styles.leftSide} variants={fadeLeft}>
          <h2>
            Build a Resilient Brand Enhance your company’s image with premium
            design that makes customers choose you.
          </h2>
        </motion.div>
        <motion.div
          className={styles.rightSide}
          variants={staggerContainer(0.15)}
        >
          <motion.h2 variants={staggerItem}>
            For the last 3 years, I’ve played a lot of roles. From multiple
            career paths in Azerbaijan design studio owner in I’ve lived a full
            life. And in that time, I’ve learned one main lesson: when your
            business is efficient, you can do more impactful work.
          </motion.h2>
          <motion.h2 variants={staggerItem}>
            And whether that “impactful work” is being a more present parent,
            volunteering for a cause you’re passionate about, or simply
            providing the best service in your industry, I want to help you
            achieve it.
          </motion.h2>
          <motion.h2 variants={staggerItem}>
            Let’s work together to create a bigger impact in your business and
            elevate your brand.
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Build;
