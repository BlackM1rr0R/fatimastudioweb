import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import {
  fadeLeft,
  drawLine,
  staggerContainer,
  staggerItemX,
  viewportOnce,
} from "../../animations";

// The capability lists are just label + rule pairs, so render them from data
// and let one animated row component handle both.
const COLUMN_ONE = [
  "Brand Strategy",
  "Brand Identity Design",
  "Copywriting & Key Messaging",
  "Web: Webflow, Squarespace, Wix",
  "Art Direction",
];
const COLUMN_TWO = [
  "Website Design",
  "E-commerce",
  "Social Media Strategy",
  "Creative Direction",
];
const COLUMN_THREE = ["Art Direction"];

const CapabilityRow = ({ label }) => (
  <>
    <motion.h2
      variants={staggerItemX}
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {label}
    </motion.h2>
    {/* The rule draws itself from the left as the row arrives. */}
    <motion.hr variants={drawLine} style={{ transformOrigin: "left" }} />
  </>
);

const Capabilities = () => {
  return (
    <div className={styles.background}>
      <motion.div
        className={styles.control}
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className={styles.leftSide} variants={fadeLeft}>
          <h2>CAPABILITIES</h2>
        </motion.div>
        <motion.div
          className={styles.rightSide}
          variants={staggerContainer(0.08)}
        >
          <motion.div
            className={styles.rightOne}
            variants={staggerContainer(0.09)}
          >
            {COLUMN_ONE.map((label) => (
              <CapabilityRow key={label} label={label} />
            ))}
          </motion.div>
          <motion.div
            className={styles.rightTwo}
            variants={staggerContainer(0.09)}
          >
            {COLUMN_TWO.map((label) => (
              <CapabilityRow key={label} label={label} />
            ))}
          </motion.div>
          <motion.div
            className={styles.rightThree}
            variants={staggerContainer(0.09)}
          >
            {COLUMN_THREE.map((label) => (
              <CapabilityRow key={label} label={label} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Capabilities;
