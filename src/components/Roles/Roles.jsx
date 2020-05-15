import React from "react";
import styles from "./Roles.module.css";
import initiator from "../../assets/initiator.png";
import controller from "../../assets/controller.png";
import duelist from "../../assets/duelist.png";
import sentinel from "../../assets/sentinel.png";

class Roles extends React.Component {
  render() {
    return(
      <div className={styles.mainBackground}>
        <div className="container d-flex flex-wrap">
          <div className="col-6">
            <img src={initiator} alt=""/>
          </div>
          <div className="col-6">
            <img src={controller} alt="" />
          </div>
          <div className="col-6">
            <img src={duelist} alt="" />
          </div>
          <div className="col-6">
            <img src={sentinel} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Roles
