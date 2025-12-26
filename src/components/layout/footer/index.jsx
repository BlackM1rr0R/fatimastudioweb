import React from "react";
import styles from "./index.module.css";
const Footer = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.left}>
          <h2>© 2024 Fatima Bashir. All Rights Reserved.</h2>
        </div>
        <div className={styles.left}>
          <h2>Sources: LinkedIn, Behance, Resume, Portfolio.1</h2>
        </div>
        <div className={styles.left}>
          <h2>Designed by Me. Built by Trustly</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
