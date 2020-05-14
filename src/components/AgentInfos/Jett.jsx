import React from "react";
import styles from "./AgentInfos.module.css";
import jett from "../../assets/jett.png";
import cloudBurst from "../../assets/cloudBurst.png";
import updraft from "../../assets/updraft.png";
import tailwind from "../../assets/tailwind.png";
import bladeStorm from "../../assets/bladeStorm.png";

class Jett extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.jettBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>JETT</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Jett’s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish,
          cutting enemies up before they even know what hit them.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={cloudBurst} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>CLOUDBURST</h5>
                <p className={`${styles.abilityDescription}`}>Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={updraft} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>UPDRAFT</h5>
                <p className={`${styles.abilityDescription}`}>Instantly propel Jett high into the air.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={tailwind} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>TAILWIND</h5>
                <p className={`${styles.abilityDescription}`}>Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={bladeStorm} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>BLADE STORM</h5>
                <p className={`${styles.abilityDescription}`}>Equip a set of highly accurate throwing knives that recharge on an opponent. Fire to throw a single knife at your target. Alternative Fire to throw all remaining daggers at your target.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={jett} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Jett
