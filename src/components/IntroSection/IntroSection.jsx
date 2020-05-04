import React from "react";
import styles from "./IntroSection.module.css";
import logo from '../../assets/valorant.png'

class IntroSection extends React.Component {
  render() {
    return (
      <div className={`d-flex justify-content-center align-items-center ${styles.introSectionBackground}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={`${styles.slideIn} ${styles.valorantLogo}`}/>
          <div className="d-flex justify-content-center">
            <div className={`${styles.test} ${styles.slideIn}`}>
              <h5>A 5v5 character-based tactical shooter</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroSection;
