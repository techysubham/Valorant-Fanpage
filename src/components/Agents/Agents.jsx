import React from "react";
import styles from "./Agents.module.css";
import breach from "../../assets/breach.png";
import brimstone from "../../assets/brimstone.png";
import cypher from "../../assets/cypher.png";
import jett from "../../assets/jett.png";
import omen from "../../assets/omen.png";
import phoenix from "../../assets/phoenix.png";
import raze from "../../assets/raze.png";
import sage from "../../assets/sage.png";
import sova from "../../assets/sova.png";
import viper from "../../assets/viper.png";

class Agents extends React.Component {
  render() {
    return (
      <div className={`d-flex justify-content-center ${styles.background}`}>
        <div className="col-12 d-flex flex-wrap justify-content-around">
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={breach} alt="" className={`${styles.agentImage} ${styles.breachContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>BREACH</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={brimstone} alt="" className={`${styles.agentImage} ${styles.brimstoneContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>BRIMSTONE</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={cypher} alt="" className={`${styles.agentImage} ${styles.cypherContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>CYPHER</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={jett} alt="" className={`${styles.agentImage} ${styles.jettContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>JETT</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={omen} alt="" className={`${styles.agentImage} ${styles.omenContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>OMEN</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={phoenix} alt="" className={`${styles.agentImage} ${styles.phoenixContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>PHOENIX</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={raze} alt="" className={`${styles.agentImage} ${styles.razeContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>RAZE</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={sage} alt="" className={`${styles.agentImage} ${styles.sageContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>SAGE</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={sova} alt="" className={`${styles.agentImage} ${styles.sovaContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>SOVA</h2>
          </div>
          <div className={`col-3 m-4 ${styles.agentContainer}`}>
            <img src={viper} alt="" className={`${styles.agentImage} ${styles.viperContainer}`} />
            <h2 className={`text-center m-3 p-2 ${styles.agentName}`}>VIPER</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Agents
