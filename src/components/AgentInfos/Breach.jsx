import React from "react";
import styles from "./AgentInfos.module.css";
import breach from "../../assets/breach.png";

class Breach extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.breachBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>BREACH</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no
            fight is ever fair.</h6>
        </div>
        <div className="col-5">
          <img src={breach} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`}/>
        </div>
      </div>
    )
  }
}

export default Breach
