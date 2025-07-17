import React from "react";
import styles from "./index.module.css";
import FatimaPhoto from "../../assets/images/image111.png";
import FigmaPhoto from "../../assets/images/figmaaaaa.png";
const FatimaFigma = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.photoFatima}>
          <img src={FatimaPhoto} alt="" />
        </div>
        <div className={styles.figmaPhoto}>
          <img src={FigmaPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FatimaFigma;
