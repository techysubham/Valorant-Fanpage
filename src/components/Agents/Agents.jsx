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
import yoru from "../../assets/yoru.png";
import neon from "../../assets/neon.png";
import reyna from "../../assets/reyna.png";
import chamber from "../../assets/chamber.png";
import killjoy from "../../assets/killJoy.png";
import astra from "../../assets/astra.png";
import harbor from "../../assets/harbor.png";
import skye from "../../assets/skye.png";
import kayo from "../../assets/KAYO.png";
import fade from "../../assets/fade.png";

class Agents extends React.Component {
  constructor(props) {
    super(props);
    this.setAgentScreen = this.setAgentScreen.bind(this);
  }

  setAgentScreen(event) {
    const setScreenMethod = this.props.setScreen;
    setScreenMethod(event.currentTarget.id);
  }

  render() {
    return (
      <div className={`d-flex justify-content-center ${styles.background}`}>
        <div className="col-12 d-flex flex-wrap justify-content-around">
          <div
            id="reyna"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={reyna}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              REYNA
            </h2>
          </div>

          <div
            id="killjoy"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={killjoy}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              KILLJOY
            </h2>
          </div>

          <div
            id="fade"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={fade}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              FADE
            </h2>
          </div>

          <div
            id="kayo"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={kayo}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              KAY/O
            </h2>
          </div>

          <div
            id="skye"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={skye}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              SKYE
            </h2>
          </div>

          <div
            id="harbor"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={harbor}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              HARBOR
            </h2>
          </div>

          <div
            id="astra"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={astra}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              ASTRA
            </h2>
          </div>

          <div
            id="chamber"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={chamber}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              CHAMBER
            </h2>
          </div>

          <div
            id="neon"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={neon}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              NEON
            </h2>
          </div>

          <div
            id="yoru"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={yoru}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              YORU
            </h2>
          </div>
          <div
            id="breach"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.breachContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={breach}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              BREACH
            </h2>
          </div>
          <div
            id="brimstone"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.brimstoneContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={brimstone}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              BRIMSTONE
            </h2>
          </div>
          <div
            id="cypher"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.cypherContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={cypher}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              CYPHER
            </h2>
          </div>
          <div
            id="jett"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.jettContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={jett}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              JETT
            </h2>
          </div>
          <div
            id="omen"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.omenContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={omen}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              OMEN
            </h2>
          </div>
          <div
            id="phoenix"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.phoenixContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={phoenix}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              PHOENIX
            </h2>
          </div>
          <div
            id="raze"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.razeContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={raze}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              RAZE
            </h2>
          </div>
          <div
            id="sage"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.sageContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={sage}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              SAGE
            </h2>
          </div>
          <div
            id="sova"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.sovaContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={sova}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              SOVA
            </h2>
          </div>
          <div
            id="viper"
            onClick={this.setAgentScreen}
            className={`col-3 m-4 ${styles.agentContainer} ${styles.viperContainer}`}
          >
            <div className={`${styles.mobileCenter}`}>
              <img
                src={viper}
                alt=""
                className={`${styles.agentImage} ${styles.slideIn}`}
              />
            </div>
            <h2
              className={`text-center m-3 p-2 ${styles.agentName} ${styles.slideIn}`}
            >
              VIPER
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Agents;
