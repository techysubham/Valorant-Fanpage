import React from "react"
import styles from "./GameInfo.module.css";

class GameInfo extends React.Component {
  render() {
    return (
      <div className={styles.sectionOne}>
        <div className="container">
          <div className="col-6">
            <h2 className={`${styles.slideIn} ${styles.topPadding} ${styles.bigFont}`}>DOMINATE YOUR FOES WITH PRECISION SHOOTING...  </h2>
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    )
  }
}

export default GameInfo
