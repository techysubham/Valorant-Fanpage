import React from "react";
import styles from "./AgentInfos.module.css";
import viper from "../../assets/viper.png";
import snakeBite from "../../assets/snakeBite.png";
import poisonCloud from "../../assets/poisonCloud.png";
import toxicScreen from "../../assets/toxicScreen.png";
import vipersPit from "../../assets/vipersPit.png";

class Viper extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.viperBackground} d-flex justify-content-around flex-wrap flex-row`}>
        <div className={`col-5 mt-4 ${styles.slideOverFromLeft} ${styles.mobileDescription}`}>
          <h1 className={`text-center ${styles.agentFont}`}>VIPER</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy’s vision. If the toxins don’t kill her prey,
          her mind games surely will.</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={snakeBite} alt="" className={`${styles.abilities}`} />
              <div className={`${styles.descriptionSizing}`}>
                <h5 className={`${styles.abilityName}`}>SNAKE BITE</h5>
                <p className={`${styles.abilityDescription}`}>Equip a chemical launcher. Fire to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={poisonCloud} alt="" className={`${styles.abilities}`} />
              <div className={`${styles.descriptionSizing}`}>
                <h5 className={`${styles.abilityName}`}>POISON CLOUD</h5>
                <p className={`${styles.abilityDescription}`}>Equip a gas emitter. Fire to throw the emitter that perpetually remains throughout the round. Re-use the ability to create a toxic gas cloud at the cost of fuel. This ability can be re-used more than once and can be picked up to be redeployed.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={toxicScreen} alt="" className={`${styles.abilities}`} />
              <div className={`${styles.descriptionSizing}`}>
                <h5 className={`${styles.abilityName}`}>TOXIC SCREEN</h5>
                <p className={`${styles.abilityDescription}`}>Equip a gas emitter launcher. Fire to deploy a long line of gas emitters. Re-use the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be re-used more than once.</p>
              </div>
            </div>
            <div className="d-flex mt-4 mb-5">
              <img src={vipersPit} alt="" className={`${styles.abilities}`} />
              <div className={`${styles.descriptionSizing}`}>
                <h5 className={`${styles.abilityName}`}>VIPER'S PIT</h5>
                <p className={`${styles.abilityDescription}`}>Equip a chemical sprayer. Fire to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-5 ${styles.mobileImage}`}>
          <div className="d-flex justify-content-center">
            <img src={viper} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
          </div>
        </div>
      </div>
    )
  }
}

export default Viper
