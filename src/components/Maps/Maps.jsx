import React from "react";
import styles from "./Maps.module.css";
import bind from "../../assets/bind.png";
import haven from "../../assets/haven.png";
import split from "../../assets/split.png";

class Maps extends React.Component {
  render() {
    return(
      <div className={styles.mainBackground}>
        <div className="container d-flex flex-wrap justify-content-center">
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={bind} alt="" className={styles.mapSize}/>
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>BIND</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={haven} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>HAVEN</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={split} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>SPLIT</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Maps
