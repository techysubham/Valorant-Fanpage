import React from "react";
import styles from "./AgentInfos.module.css";
import raze from "../../assets/raze.png";
import boomBot from "../../assets/boomBot.png";
import blastPack from "../../assets/blastPack.png";
import paintShells from "../../assets/paintShells.png";
import showstopper from "../../assets/showstopper.png";

class Raze extends React.Component {
  render() {
    return (
      <div className={`${styles.background} ${styles.razeBackground} d-flex justify-content-around`}>
        <div className={`col-5 mt-4 ${styles.slideOverFromLeft}`}>
          <h1 className={`text-center ${styles.agentFont}`}>RAZE</h1>
          <h6 className={`text-center ${styles.agentInfoFont}`}>Raze loves explosives. With her blunt-force-trauma playstyle, she excels at flushing entrenched
          enemies and clearing tight spaces with a generous dose of "boom."</h6>
          <div className="mt-5">
            <div className="d-flex">
              <img src={boomBot} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>BOOM BOT</h5>
                <p className={`${styles.abilityDescription}`}>Equip a Boom Bot. Fire will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={blastPack} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>BLAST PACK</h5>
                <p className={`${styles.abilityDescription}`}>Instantly throw a Blast Pack that will stick to surfaces. Re-use the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={paintShells} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>PAINT SHELLS</h5>
                <p className={`${styles.abilityDescription}`}>Equip a cluster grenade. Fire to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.</p>
              </div>
            </div>
            <div className="d-flex mt-4">
              <img src={showstopper} alt="" className={`${styles.abilities}`} />
              <div>
                <h5 className={`${styles.abilityName}`}>SHOWSTOPPER</h5>
                <p className={`${styles.abilityDescription}`}>Raze equips a single-use rocket launcher with the ability to one-shot enemies. Damage from this ability is consistent throughout the entire blast radius.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <img src={raze} alt="" className={`${styles.agentImages} ${styles.slideOverFromRight}`} />
        </div>
      </div>
    )
  }
}

export default Raze
