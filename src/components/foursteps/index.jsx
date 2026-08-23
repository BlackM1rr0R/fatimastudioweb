import React, { useMemo } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "../../animations";

const FourSteps = () => {
  const data = useMemo(
    () => [
      {
        id: "1. Assess Your Needs",
        bio: "We start by observing  and understanding your business andperforming a gapanalysis.",
      },
      {
        id: "2. Design a Strategy",
        bio: "Crafting a customplan that addressesyour specificpain points is ournext step.",
      },
      {
        id: "3. Implement & Adjust",
        bio: "We work together toimplement thestrategy, adjusting asneeded for optimal results.",
      },
      {
        id: "4. Ongoing Support",
        bio: "As you improve your business and closethe gaps, I'll be thereand ready for continuous support.",
      },
    ],
    []
  );

  return (
    <div className={styles.background}>
      <motion.div
        className={styles.control}
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className={styles.headerControl} variants={fadeUp}>
          <h2>Four Steps to Improved Efficiency</h2>
        </motion.div>
        {/* The four steps pop in one by one, so the sequence reads as a path. */}
        <motion.div
          className={styles.mappingInfo}
          variants={staggerContainer(0.14, 0.2)}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={styles.controlMap}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h1>{item.id}</h1>
              <h2>{item.bio}</h2>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FourSteps;
