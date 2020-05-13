import React from "react";
import styles from "./AgentInfos.module.css";
import brimstone from "../../assets/brimstone.png";

class Brimstone extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.brimstoneBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>BRIMSTONE</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the
          unmatched boots-on-the-ground commander.</h6>
        </div>
        <div className="col-5">
          <img src={brimstone} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Brimstone
