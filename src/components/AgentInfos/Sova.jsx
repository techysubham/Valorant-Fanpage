import React from "react";
import styles from "./AgentInfos.module.css";
import sova from "../../assets/sova.png";

class Sova extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.sovaBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>SOVA</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting
          abilities ensure that even if you run, you cannot hide.</h6>
        </div>
        <div className="col-5">
          <img src={sova} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Sova
