import React from "react";
import styles from "./AgentInfos.module.css";
import cypher from "../../assets/cypher.png";

class Cypher extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.cypherBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>CYPHER</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe.
          No maneuver goes unseen. Cypher is always watching.</h6>
        </div>
        <div className="col-5">
          <img src={cypher} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Cypher
