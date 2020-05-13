import React from "react";
import styles from "./AgentInfos.module.css";
import viper from "../../assets/viper.png";

class Viper extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.viperBackground} d-flex justify-content-around`}>
        <div className="col-5">

        </div>
        <div className="col-5">
          <img src={viper} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Viper
