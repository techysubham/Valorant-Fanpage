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
            <div className="mt-5 col-9">
              <p className={`${styles.smallFont} ${styles.fadeIn}`}>Whether you enjoy sniping from long distances, dueling with rifles and SMGs, or blowing enemies away with shotguns, Valorant has a wide array of firearms to fit your playstyle.</p>
            </div>
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
