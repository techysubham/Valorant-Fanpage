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
            <div className={`${styles.introBox} ${styles.slideIn}`}>
              <h5 className={`text-center ${styles.introBoxFont}`}>A 5v5 character-based <br></br>tactical shooter by Riot Games</h5>
              <h6 className={`text-center ${styles.introBoxFont}`}>Interested?</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroSection;
