import React from "react";
import styles from "./IntroSection.module.css";
import logo from '../../assets/valorant.png'

class IntroSection extends React.Component {
  render() {
    return (
      <div className={`d-flex justify-content-center align-items-center ${styles.introSectionBackground}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={`${styles.slideIn} ${styles.valorantLogo}`}/>
        </div>
      </div>
    )
  }
}

export default IntroSection;
