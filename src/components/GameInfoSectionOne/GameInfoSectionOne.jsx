import React from "react"
import styles from "./GameInfoSectionOne.module.css";
import shootingGif from "../../assets/shoot.gif"

class GameInfoSectionOne extends React.Component {
  render() {
    return (
      <div className={styles.sectionOne}>
        <div className="d-flex justify-content-around">
          <div className="col-4 ml-4">
            <h2 className={`${styles.slideIn} ${styles.topPadding} ${styles.bigFont}`}>DOMINATE YOUR FOES WITH PRECISION SHOOTING...  </h2>
          </div>
          <div className="col-5">
            <img className={`${styles.shootingGifSize} ${styles.topPadding}`} src={shootingGif} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default GameInfoSectionOne
