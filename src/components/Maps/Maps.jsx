import React from "react";
import styles from "./Maps.module.css";
import bind from "../../assets/bind.png";

class Maps extends React.Component {
  render() {
    return(
      <div className={styles.mainBackground}>
        <div className="container d-flex flex-wrap">
          <div className="col-6 mt-5 mb-5">
            <img src={bind} alt=""/>
            hello
          </div>
        </div>
      </div>
    )
  }
}

export default Maps
