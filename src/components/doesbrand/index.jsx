import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
  staggerItemX,
  viewportOnce,
} from "../../animations";

const DoesBrand = () => {
  return (
    <div className={styles.background}>
      <motion.div
        className={styles.control}
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div
          className={styles.leftSide}
          variants={staggerContainer(0.12)}
        >
          <motion.h1 variants={fadeUp}>
            If your service and your look don't match the business you want to
            be, it's costing you time, money, and impact.
          </motion.h1>
          {/* Each pain point slides in one after the other, like a checklist
              being read out. */}
          <motion.div
            className={styles.serviceClose}
            variants={staggerContainer(0.1)}
          >
            <motion.h2 variants={staggerItemX}>
              ⓧ You're living with an outdated logo and website
            </motion.h2>
            <motion.h2 variants={staggerItemX}>
              ⓧ Your team is overloaded by repetitive, highly manual tasks
            </motion.h2>
            <motion.h2 variants={staggerItemX}>
              ⓧ You’re unsure of why people choose your competitors over you
            </motion.h2>
            <motion.h2 variants={staggerItemX}>
              ⓧ Your customer service experience leaves a lot to be desired
            </motion.h2>
            <motion.h2 variants={staggerItemX}>
              ⓧ Your internal systems — or lack of systems — are working againstt
              you
            </motion.h2>
          </motion.div>
          <motion.h2 variants={fadeUp}>
            Luckily, all of these things are fixable – and I'm here to help.
          </motion.h2>
        </motion.div>
        <motion.div className={styles.rightSide} variants={fadeRight}>
          <h2>How Does Your Brand Experience Measure Up?</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DoesBrand;
