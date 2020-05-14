import React from "react";
import styles from "./AgentInfos.module.css";
import omen from "../../assets/omen.png";
import shroudedStep from "../../assets/shroudedStep.png";
import paranoia from "../../assets/paranoia.png";
import darkCover from "../../assets/darkCover.png";
import fromTheShadows from "../../assets/fromTheShadows.png";


class Omen extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.omenBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-4 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>OMEN</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia
          take hold as foes scramble to uncover where it might strike next.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={shroudedStep} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>SHROUDED STEP</h5>
                <p className={`${styles.abilityDescription}`}>Equip a shadow walk ability and see its range indicator. Fire to begin a brief channel, then teleport to the marked location.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={paranoia} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>PARANOIA</h5>
                <p className={`${styles.abilityDescription}`}>Instantly fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={darkCover} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>DARK COVER</h5>
                <p className={`${styles.abilityDescription}`}>Equip a shadow orb and see its range indicator. Fire to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. Hold Alternate Fire while targeting to move the marker further away. Hold the ability key with targeting to move the market closer.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={fromTheShadows} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>FROM THE SHADOWS</h5>
                <p className={`${styles.abilityDescription}`}>Equip a tactical map. Fire to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={omen} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Omen
