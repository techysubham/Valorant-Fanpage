import React from "react";
import styles from "./Agents.module.css";
import breach from "../../assets/breach.png";
import brimstone from "../../assets/brimstone.png";

class Agents extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <img src={breach} alt="" className={styles.breachImage}/>
          <img src={brimstone} alt="" className={styles.breachImage} />
        </div>
      </div>
    )
  }
}

export default Agents
