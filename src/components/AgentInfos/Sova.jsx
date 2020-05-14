import React from "react";
import styles from "./AgentInfos.module.css";
import sova from "../../assets/sova.png";
import shockBolt from "../../assets/shockBolt.png";
import owlDrone from "../../assets/owlDrone.png";
import reconBolt from "../../assets/reconBolt.png";
import huntersFury from "../../assets/huntersFury.png";

class Sova extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.sovaBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-2 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>SOVA</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting
          abilities ensure that even if you run, you cannot hide.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={shockBolt} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>SHOCK BOLT</h5>
                <p className={`${styles.abilityDescription}`}>Equip a bow with shock bolt. Fire to send the explosive bolt forward detonating upon collision and damaging players nearby. Hold Fire to extend the range of the projectile. Alternate Fire to add up to two bounces to this arrow.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={owlDrone} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>OWL DRONE</h5>
                <p className={`${styles.abilityDescription}`}>Equip an owl drone. Fire to deploy and take control of movement of the drone. While in control of the drone, Fire to shoot a marking dart. This dart will reveal the location of any player struck by the dart.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={reconBolt} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>RECON BOLT</h5>
                <p className={`${styles.abilityDescription}`}>Equip a bow with recon bolt. Fire to send the bolt forward activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. Hold Fire to extend the range of the projectile. Alternate Fire to add up to two bounces to this arrow.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={huntersFury} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>HUNTER'S FURY</h5>
                <p className={`${styles.abilityDescription}`}>Equip a bow with three long-range, wall-piercing energy blasts. Fire to release an blast in a line in front of Sova dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={sova} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Sova
