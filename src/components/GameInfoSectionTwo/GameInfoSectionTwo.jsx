import React from "react"
import styles from "./GameInfoSectionTwo.module.css";
import abilitiesGif from "../../assets/abilities.gif"

class GameInfoSectionTwo extends React.Component {
  render() {
    return (
      <div className={styles.sectionOne}>
        <div className="d-flex justify-content-center">
          <div className="col-6">
            <img src={abilitiesGif} alt="" className={`${styles.shootingGifSize} ${styles.topPadding}`}/>
          </div>
          <div className="col-4">
            <h2 className={` ${styles.slideIn} ${styles.topPadding} ${styles.bigFont}`}>...OR WITH STRATEGIC ABILITIES  </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default GameInfoSectionTwo
