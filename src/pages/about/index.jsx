import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";

const About = () => {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="show">
      About
    </motion.div>
  );
};

export default About;
