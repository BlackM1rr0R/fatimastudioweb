import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "../../../animations";

const Footer = () => {
  return (
    <div className={styles.background}>
      <motion.div
        className={styles.control}
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className={styles.left} variants={staggerItem}>
          <h2>© 2024 Fatima Bashir. All Rights Reserved.</h2>
        </motion.div>
        <motion.div className={styles.left} variants={staggerItem}>
          <h2>Sources: LinkedIn, Behance, Resume, Portfolio.1</h2>
        </motion.div>
        <motion.div className={styles.left} variants={staggerItem}>
          <h2>Designed by Me. Built by Trustly</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
