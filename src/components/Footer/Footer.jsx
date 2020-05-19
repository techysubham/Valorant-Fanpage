import React from "react";
import styles from "./Footer.module.css";
import fistLogo from "../../assets/fistLogo.png";
import rating from "../../assets/rating.png";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={`${styles.mainFooter}`}>
          <div>
            <div className="d-flex justify-content-center">
              <img src={fistLogo} alt="" className={`mt-4 ${styles.fistLogoSize}`}/>
            </div>
            <div className={`d-flex justify-content-center`}>
              <p className={`d-flex justify-content-center ${styles.footerNote}`}>Notice: This is a fake Valorant game website and is only a personal project. I do not have any business with Riot Games.</p>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <img src={rating} alt="" className={styles.ratingSizing}/>
              <div className="ml-2">
                <p className={styles.ratingDetails}>Blood</p>
                <p className={styles.ratingDetails}>Language</p>
                <p className={styles.ratingDetails}>Violence</p>
                <p className={styles.ratingDetails}>User Interact</p>
                <p className={styles.ratingDetails}>In-Game Purchases</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
