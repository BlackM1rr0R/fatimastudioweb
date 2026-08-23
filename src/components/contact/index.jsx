import React from "react";
import styles from "./index.module.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../animations";

const SPRING = { type: "spring", stiffness: 300, damping: 20 };

const buttonVariants = {
  ...staggerItem,
  hovered: { scale: 1.04, transition: SPRING },
};

const arrowVariants = {
  hidden: { x: 0 },
  show: { x: 0 },
  hovered: { x: 6, transition: SPRING },
};

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r3zarui",
        "template_9by6o6s",
        e.target,
        "i2BXGjjMpZgU45TJr"
      )
      .then(
        () => {
          alert("Mesaj uğurla göndərildi ✅");
          e.target.reset();
        },
        (error) => {
          alert("Xəta baş verdi ❌");
          console.log(error.text);
        }
      );
  };

  // Every field gets the same arrival + focus behaviour.
  const fieldMotion = {
    variants: staggerItem,
    whileFocus: { scale: 1.02 },
    transition: { type: "spring", stiffness: 300, damping: 22 },
  };

  return (
    <div className={styles.background}>
      <motion.div
        className={styles.controlSide}
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.div className={styles.leftSide} variants={fadeLeft}>
          <h2>Change the Way You Do Business, For the Better</h2>
        </motion.div>
        <motion.div
          className={styles.rightSide}
          variants={staggerContainer(0.15)}
        >
          <motion.div
            className={styles.topRight}
            variants={staggerContainer(0.12)}
          >
            <motion.p variants={fadeUp}>
              Let’s enhance your business potential with seamless workflows,
              efficient processes and tools, a stronger brand presence, and all-
              around more operational clarity. And when we do, we’ll elevate
              your impact.
            </motion.p>
            <motion.h2 variants={fadeUp}>Are you ready?</motion.h2>
          </motion.div>
          <motion.form
            className={styles.inputs}
            onSubmit={sendEmail}
            variants={staggerContainer(0.09, 0.15)}
          >
            <motion.input name="name" placeholder="Your name*" required {...fieldMotion} />
            <motion.input
              name="email"
              type="email"
              placeholder="Your email*"
              required
              {...fieldMotion}
            />
            <motion.input
              name="source"
              placeholder="How did you hear about me?"
              {...fieldMotion}
            />
            <motion.input
              name="location"
              placeholder="Your location*"
              required
              {...fieldMotion}
            />
            <motion.textarea
              name="message"
              placeholder="Your message"
              {...fieldMotion}
            />

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hovered"
              whileTap={{ scale: 0.96 }}
            >
              SUBMIT{" "}
              {/* Naming the hover state lets it cascade to the arrow, so the
                  button grows and the arrow slides in the same gesture. */}
              <motion.span variants={arrowVariants}>{">"}</motion.span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
