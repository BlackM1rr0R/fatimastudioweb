import React from "react";
import styles from "./index.module.css";
import TrustPhoto from "../../assets/images/Container.png";
import ProjectPhoto from "../../assets/images/brendt.png";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeUp,
  imageReveal,
  staggerContainer,
  viewportOnce,
} from "../../animations";

const Trustly = () => {
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
          variants={staggerContainer(0.15)}
        >
          <motion.img src={TrustPhoto} alt="" variants={fadeLeft} />
          <motion.p variants={fadeUp}>
            Truslty™ is a brand transformation studio specializing in brand
            refreshes. We help service-based small business owners build a
            standout brand image — one they can be proud of. In addition, we
            offer reliable design services, as well as hosting and domain sales,
            to support their digital presence.
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.rightSide}
          variants={imageReveal}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          <img src={ProjectPhoto} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Trustly;
