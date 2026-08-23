import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ImzaPhoto from "../../../assets/images/SVG.png";
import FatimaPp from "../../../assets/images/image11.png";
import VectorText from "../../../assets/images/Vector.png";
import BehancePhoto from "../../../assets/images/image 11.png";
import LinkedinPhotoo from "../../../assets/images/Img.png";
import AzerbaijanFlag from "../../../assets/images/azerbaijan.png";
import InstagramPhoto from "../../../assets/images/Link - LinkedIn Logo Link.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeUp,
  fadeRight,
  imageReveal,
  scaleIn,
  staggerContainer,
  staggerItem,
  hoverGrow,
} from "../../../animations";

// Animate the router Link itself so it stays a direct <a> child of .menuSide —
// the stylesheet targets `.menuSide a img`, so an extra wrapper would break it.
const MotionLink = motion.create(Link);

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Hero parallax: the portrait drifts slower than the page as you scroll away.
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, 24]);

  return (
    <div className={styles.background}>
      <motion.div
        className={styles.control}
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className={styles.designSuccess}
          variants={staggerItem}
        >
          <motion.h1 variants={fadeUp}>
            Design Success, One Project at a Time
          </motion.h1>
          <motion.p variants={fadeUp}>
            Hi, I’m Fatima Bashir, Your go-to Branding Consultant for elevating
            your brand perception. Let's design the experience you want to see
            tomorrow.
          </motion.p>
          <motion.img
            src={ImzaPhoto}
            alt=""
            variants={fadeRight}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        <motion.div className={styles.controlTwoSide} variants={staggerItem}>
          <div className={styles.twoSide}>
            <motion.h1 variants={fadeUp}>EST.2002</motion.h1>
            <motion.p variants={fadeUp}>Currently live in</motion.p>
            <motion.h2 variants={fadeUp}>
              Azerbaijan <img src={AzerbaijanFlag} alt="" />
            </motion.h2>
          </div>
          <motion.div
            className={styles.twoSideImage}
            style={{ y: photoY }}
            variants={imageReveal}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <img src={FatimaPp} alt="" />
          </motion.div>
        </motion.div>

        <motion.div className={styles.controlThreeSide} variants={staggerItem}>
          <div className={styles.threeSide}>
            {/* Slow, endless rotation on the circular badge graphic. */}
            <motion.img
              src={VectorText}
              alt=""
              animate={{ rotate: 360 }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            />
            <h2>Designer</h2>
          </div>
          <div className={styles.clockThreeSide}>
            <h1>49.1579° N 121.9515° W</h1>
            <motion.h2
              key={time.getSeconds()}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {time.toLocaleTimeString()}
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          className={styles.menuSide}
          variants={staggerContainer(0.1, 0.5)}
        >
          <motion.h2
            variants={scaleIn}
            whileHover={{ letterSpacing: "2px" }}
            transition={{ duration: 0.3 }}
          >
            MENU +
          </motion.h2>
          <MotionLink
            target="_blank"
            to="https://www.instagram.com/fatimabrandlfe/profilecard/"
            variants={scaleIn}
            {...hoverGrow}
          >
            <img src={InstagramPhoto} alt="" />
          </MotionLink>
          <MotionLink
            target="_blank"
            to="https://www.linkedin.com/in/fatima-bashirli-104348286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            variants={scaleIn}
            {...hoverGrow}
          >
            <img src={LinkedinPhotoo} alt="" />
          </MotionLink>
          <MotionLink
            target="_blank"
            to="https://www.behance.net/fatimabashirli"
            variants={scaleIn}
            {...hoverGrow}
          >
            <img src={BehancePhoto} alt="" />
          </MotionLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
