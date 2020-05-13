import React from "react";
import styles from "./AgentInfos.module.css";
import raze from "../../assets/raze.png";

class Raze extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.razeBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={raze} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Raze
