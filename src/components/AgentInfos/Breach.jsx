import React from "react";
import styles from "./AgentInfos.module.css";
import breach from "../../assets/breach.png";

class Breach extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.breachBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={breach} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`}/>
        </div>
      </div>
    )
  }
}

export default Breach
