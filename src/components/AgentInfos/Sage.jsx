import React from "react";
import styles from "./AgentInfos.module.css";
import sage from "../../assets/sage.png";
import barrierOrb from "../../assets/barrierOrb.png";
import slowOrb from "../../assets/slowOrb.png";
import healingOrb from "../../assets/healingOrb.png";
import resurrection from "../../assets/resurrection.png";

class Sage extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.sageBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>SAGE</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm
          center to a hellish battlefield.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={barrierOrb} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>BARRIER ORB</h5>
                <p className={`${styles.abilityDescription}`}>Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={slowOrb} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>SLOW ORB</h5>
                <p className={`${styles.abilityDescription}`}>Equip an orb that slows whoever walks on them after being thrown on the ground.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={healingOrb} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>HEALING ORB</h5>
                <p className={`${styles.abilityDescription}`}>Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={resurrection} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>RESURRECTION</h5>
                <p className={`${styles.abilityDescription}`}>Equip a resurrection ability. Fire with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={sage} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Sage
