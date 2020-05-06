import React from "react"
import styles from "./GameInfoSectionTwo.module.css";

class GameInfoSectionTwo extends React.Component {
  render() {
    return (
      <div className={styles.sectionOne}>
        <div className="d-flex justify-content-around">
          <div className="col-4 ml-4">
            <h2 className={`${styles.slideIn} ${styles.topPadding} ${styles.bigFont}`}>DOMINATE YOUR FOES WITH PRECISION SHOOTING...  </h2>
          </div>
          <div className="col-5">

          </div>
        </div>
      </div>
    )
  }
}

export default GameInfoSectionTwo
