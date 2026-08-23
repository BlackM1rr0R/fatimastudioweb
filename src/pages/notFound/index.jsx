import React from "react";
import { motion } from "framer-motion";
import { scaleIn } from "../../animations";

const NotFound = () => {
  return (
    <motion.div variants={scaleIn} initial="hidden" animate="show">
      error 404
    </motion.div>
  );
};

export default NotFound;
