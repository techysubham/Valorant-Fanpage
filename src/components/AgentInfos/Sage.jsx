import React from "react";
import styles from "./AgentInfos.module.css";
import sage from "../../assets/sage.png";

class Sage extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.sageBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={sage} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Sage
