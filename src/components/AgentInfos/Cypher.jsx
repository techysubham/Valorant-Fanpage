import React from "react";
import styles from "./AgentInfos.module.css";
import cypher from "../../assets/cypher.png";

class Cypher extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.cypherBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={cypher} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Cypher
