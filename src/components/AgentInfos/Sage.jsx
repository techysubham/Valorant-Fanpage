import React from "react";
import styles from "./AgentInfos.module.css";
import sage from "../../assets/sage.png";

class Sage extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.sageBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>SAGE</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm
          center to a hellish battlefield.</h6>
        </div>
        <div className="col-5">
          <img src={sage} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Sage
