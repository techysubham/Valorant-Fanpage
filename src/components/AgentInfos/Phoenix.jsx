import React from "react";
import styles from "./AgentInfos.module.css";
import phoenix from "../../assets/phoenix.png";
import blaze from "../../assets/blaze.png";
import curveball from "../../assets/curveball.png";
import hotHands from "../../assets/hotHands.png";
import runItBack from "../../assets/runItBack.png";

class Phoenix extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.phoenixBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-4 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>PHOENIX</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Phoenix’s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he’s got backup or not,
          he’s rushing in to fight on his own terms.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={blaze} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>BLAZE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a flame wall. Fire to create a line of flames that moves forward creating a wall that blocks vision and damages players passing through it. Hold Fire to bend the wall in the direction of your crosshair.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={curveball} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>CURVEBALL</h5>
                <p className={`${styles.abilityDescription}`}>Equip a flare orb that takes a curving path and detonates shortly after throwing, impairing vision. Fire to curve the flare orb to the left, detonating and blinding any player who sees the orb. Alternate fire to curve the flare orb to the right.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={hotHands} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>HOT HANDS</h5>
                <p className={`${styles.abilityDescription}`}>Equip a fireball. Fire to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={runItBack} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>RUN IT BACK</h5>
                <p className={`${styles.abilityDescription}`}>Instantly place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={phoenix} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Phoenix
