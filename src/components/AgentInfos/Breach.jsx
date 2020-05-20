import React from "react";
import styles from "./AgentInfos.module.css";
import breach from "../../assets/breach.png";
import aftershock from "../../assets/aftershock.png";
import flashpoint from "../../assets/flashpoint.png";
import faultLine from "../../assets/faultLine.png";
import rollingThunder from "../../assets/rollingThunder.png";

class Breach extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.breachBackground} d-flex justify-content-around flex-wrap flex-row`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft} ${styles.mobileDescription}`}>
          <h1 className={`text-center ${styles.agentFont}`}>BREACH</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no
            fight is ever fair.</h6>
            <div className="mt-5">
              <div className="d-flex">
                <img src={aftershock} alt="" className={`${styles.abilities}`}/>
                <div>
                  <h5 className={`${styles.abilityName}`}>AFTERSHOCK</h5>
                <p className={`${styles.abilityDescription}`}>Equip a fusion charge. Fire the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.</p>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={flashpoint} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>FLASHPOINT</h5>
                <p className={`${styles.abilityDescription}`}>Equip a blinding charge. Fire the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={faultLine} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>FAULT LINE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a seismic blast. Hold Fire to increase the distance. Release to set off the quake, dazing all players in its zone and in a line up to the zone.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={rollingThunder} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>ROLLING THUNDER</h5>
              <p className={`${styles.abilityDescription}`}>Equip a seismic charge. Fire to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.</p>
              </div>
            </div>
        </div>
        <div className={`col-5 ${styles.mobileImage}`}>
          <div className="d-flex justify-content-center">
            <img src={breach} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Breach
