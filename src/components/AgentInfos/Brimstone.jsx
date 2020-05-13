import React from "react";
import styles from "./AgentInfos.module.css";
import brimstone from "../../assets/brimstone.png";

class Brimstone extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.brimstoneBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={brimstone} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Brimstone
