import React from "react";
import styles from "./AgentInfos.module.css";
import omen from "../../assets/omen.png";

class Omen extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.omenBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>OMEN</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia
          take hold as foes scramble to uncover where it might strike next.</h6>
        </div>
        <div className="col-5">
          <img src={omen} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Omen
