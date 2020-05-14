import React from "react";
import styles from "./AgentInfos.module.css";
import cypher from "../../assets/cypher.png";
import trapwire from "../../assets/trapwire.png";
import cyberCage from "../../assets/cyberCage.png";
import spycam from "../../assets/spycam.png";
import neuralTheft from "../../assets/neuralTheft.png";

class Cypher extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.cypherBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-4 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>CYPHER</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe.
          No maneuver goes unseen. Cypher is always watching.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={trapwire} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>TRAP WIRE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a trapwire. Fire to place a destructible and covert tripware at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if
                they do not destroy the device in time. This ability can be picked up to be redeployed.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={cyberCage} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>CYBER CAGE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a cyber cage. Fire to toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={spycam} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>SPYCAM</h5>
                <p className={`${styles.abilityDescription}`}>Equip a spycam. Fire to place the spycam at the targeted location. REUSE this ability to take control of the camera's view. While in control of the camera. Fire to shoot a marking dart. This dart will reveal the location of any player struck by the dart.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={neuralTheft} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>NEURAL THEFT</h5>
                <p className={`${styles.abilityDescription}`}>Instantly use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={cypher} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Cypher
