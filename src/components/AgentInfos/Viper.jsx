import React from "react";
import styles from "./AgentInfos.module.css";
import viper from "../../assets/viper.png";

class Viper extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.viperBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>VIPER</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy’s vision. If the toxins don’t kill her prey,
          her mind games surely will.</h6>
        </div>
        <div className="col-5">
          <img src={viper} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Viper
