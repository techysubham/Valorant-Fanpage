import React from "react";
import styles from "./AgentInfos.module.css";
import omen from "../../assets/omen.png";

class Omen extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.omenBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={omen} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Omen
