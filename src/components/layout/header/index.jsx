import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ImzaPhoto from "../../../assets/images/SVG.png";
import FatimaPp from "../../../assets/images/image11.png";
import VectorText from "../../../assets/images/Vector.png";
import BehancePhoto from "../../../assets/images/image 11.png";
import LinkedinPhotoo from "../../../assets/images/Img.png";
import AzerbaijanFlag from '../../../assets/images/azerbaijan.png'
import InstagramPhoto from '../../../assets/images/Link - LinkedIn Logo Link.png'
import { Link } from "react-router-dom";
const Header = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.designSuccess}>
          <h1>Design Success, One Project at a Time</h1>
          <p>
            Hi, I’m Fatima Bashir, Your go-to Branding Consultant for
            elevating your brand perception. Let's design the experience you
            want to see tomorrow.
          </p>
          <img src={ImzaPhoto} alt="" />
        </div>
        <div className={styles.controlTwoSide}>
          <div className={styles.twoSide}>
            <h1>EST.2002</h1>
            <p>Currently live in</p>
            <h2>Azerbaijan <img src={AzerbaijanFlag} alt="" /></h2>
          </div>
          <div className={styles.twoSideImage}>
            <img src={FatimaPp} alt="" />
          </div>
        </div>
        <div className={styles.controlThreeSide}>
          <div className={styles.threeSide}>
            <img src={VectorText} alt="" />
            <h2>Designer</h2>
          </div>
          <div className={styles.clockThreeSide}>
            <h1>49.1579° N 121.9515° W</h1>
            <h2>{time.toLocaleTimeString()}</h2>
          </div>
        </div>
        <div className={styles.menuSide}>
          <h2>MENU +</h2>
          <Link target="_blank" to="https://www.instagram.com/fatimabrandlfe/profilecard/">
            <img src={InstagramPhoto} alt="" />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/in/fatima-bashirli-104348286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <img src={LinkedinPhotoo} alt="" />
          </Link>
          <Link target="_blank" to="https://www.behance.net/fatimabashirli">
            <img src={BehancePhoto} alt="" />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header;
