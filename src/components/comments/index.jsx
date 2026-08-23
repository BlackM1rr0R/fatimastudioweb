import React from "react";
import styles from "./index.module.css";
import AuthPhoto from "../../assets/images/asya.png";
import { StarIcon } from "../../icons";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../animations";

const STAR_COUNT = 5;

const CommentsPages = () => {
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
          variants={staggerContainer(0.18)}
        >
          <motion.div className={styles.textHeader} variants={fadeUp}>
            <p>
              “I've worked with Fatya on a couple of occasions now and he is one
              of the most authentically helpful people I've worked with. He took
              the time to really understand and clarify my situation and offered
              genuine, deep and tactical advice. Highly recommend working with
              Fatya if you want real, actionable insights and a positive,
              motivational person to drive you.”
            </p>
          </motion.div>
          <motion.div className={styles.textAuth} variants={staggerItem}>
            <motion.img
              src={AuthPhoto}
              alt=""
              whileHover={{ scale: 1.1, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            />
            <h2>Asiya A.</h2>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.rightSide}
          variants={staggerContainer(0.15)}
        >
          {/* Stars land one at a time, each with a little spin. */}
          <motion.div
            className={styles.icons}
            variants={staggerContainer(0.11)}
          >
            {Array.from({ length: STAR_COUNT }).map((_, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-flex" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.3, rotate: -60 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: { type: "spring", stiffness: 260, damping: 14 },
                  },
                }}
                whileHover={{ scale: 1.25 }}
              >
                <StarIcon />
              </motion.span>
            ))}
          </motion.div>
          <motion.div className={styles.iconsText} variants={fadeRight}>
            <h2>
              A Few Kinds Words From Colleagues and Clients I Have Worked With
            </h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CommentsPages;
