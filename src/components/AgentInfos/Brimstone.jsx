import React from "react";
import styles from "./AgentInfos.module.css";
import brimstone from "../../assets/brimstone.png";
import incendiary from "../../assets/incendiary.png";
import stimBeacon from "../../assets/stimBeacon.png";
import skySmoke from "../../assets/skySmoke.png";
import orbitalStrike from "../../assets/orbitalStrike.png";


class Brimstone extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.brimstoneBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-5 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>BRIMSTONE</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the
          unmatched boots-on-the-ground commander.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={incendiary} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>INCENDIARY</h5>
                <p className={`${styles.abilityDescription}`}>Equip an Incendiary grenade launcher. Fire to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={stimBeacon} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>STIM BEACON</h5>
                <p className={`${styles.abilityDescription}`}>Equip a Stim Beacon. Fire to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={skySmoke} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>SKY SMOKE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a tactical map. Fire to set locations where Brimstone's smoke clouds will land. Alternate Fire to confirm, launching long-lasting smoke clouds that block vision in the selected area.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={orbitalStrike} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>ORBITAL STRIKE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a tactical map. Fire to launch a lingering orbital strike laser at the selected location dealing high damage over-time to players caught in the selected area.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={brimstone} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Brimstone
