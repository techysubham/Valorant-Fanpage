import React from "react";
import styles from "./GameInfoSectionTwo.module.css";
import abilitiesGif from "../../assets/abilities.gif";

class GameInfoSectionTwo extends React.Component {
  render() {
    return (
      <div className={styles.sectionOne}>
        <div className="d-flex justify-content-center flex-wrap">
          <div
            className={`col-6 ${styles.mobileSizing} ${styles.mobileCenter}`}
          >
            <img
              src={abilitiesGif}
              alt=""
              className={`${styles.shootingGifSize} ${styles.topPadding}`}
            />
          </div>
          <div className={`col-4 ${styles.mobileSizing} text-right`}>
            <div className={`${styles.flexEnd}`}>
              <h2
                className={` ${styles.slideIn} ${styles.topPadding} ${styles.bigFont} ${styles.mobileMargin} ${styles.boldSizing}`}
              >
                ...OR WITH STRATEGIC ABILITIES.{" "}
              </h2>
            </div>
            <div className={`mt-5 mb-5 col-11 ${styles.flexEnd}`}>
              <p
                className={`${styles.smallFont} ${styles.fadeIn} ${styles.regSizing}`}
              >
                Valorant has 21 agents, all with unique and specialized
                abilities to aid in the most intense battles, and allowing
                players to be creative and strategic with their approach to
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameInfoSectionTwo;
