import React from "react";
import styles from "./AgentInfos.module.css";
import jett from "../../assets/jett.png";

class Jett extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.jettBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>JETT</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Jett’s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish,
          cutting enemies up before they even know what hit them.</h6>
        </div>
        <div className="col-5">
          <img src={jett} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Jett
