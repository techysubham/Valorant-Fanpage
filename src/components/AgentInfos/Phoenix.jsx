import React from "react";
import styles from "./AgentInfos.module.css";
import phoenix from "../../assets/phoenix.png";

class Phoenix extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.phoenixBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>PHOENIX</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Phoenix’s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he’s got backup or not,
          he’s rushing in to fight on his own terms.</h6>
        </div>
        <div className="col-5">
          <img src={phoenix} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Phoenix
