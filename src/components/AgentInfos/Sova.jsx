import React from "react";
import styles from "./AgentInfos.module.css";
import sova from "../../assets/sova.png";

class Sova extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.sovaBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={sova} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Sova
