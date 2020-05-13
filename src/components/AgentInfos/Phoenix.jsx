import React from "react";
import styles from "./AgentInfos.module.css";
import phoenix from "../../assets/phoenix.png";

class Phoenix extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.phoenixBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={phoenix} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Phoenix
