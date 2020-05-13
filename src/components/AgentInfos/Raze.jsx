import React from "react";
import styles from "./AgentInfos.module.css";
import raze from "../../assets/raze.png";

class Raze extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.razeBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>RAZE</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Raze loves explosives. With her blunt-force-trauma playstyle, she excels at flushing entrenched
          enemies and clearing tight spaces with a generous dose of "boom."</h6>
        </div>
        <div className="col-5">
          <img src={raze} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Raze
