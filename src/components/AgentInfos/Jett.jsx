import React from "react";
import styles from "./AgentInfos.module.css";
import jett from "../../assets/jett.png";

class Jett extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.jettBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={jett} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Jett
