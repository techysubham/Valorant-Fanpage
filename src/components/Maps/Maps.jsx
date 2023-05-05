import React from "react";
import styles from "./Maps.module.css";
import bind from "../../assets/bind.png";
import haven from "../../assets/haven.png";
import ascent from "../../assets/ascent.png";
import split from "../../assets/split.png";
import icebox from "../../assets/Icebox.png";
import breeze from "../../assets/Breeze.png";
import pearl from "../../assets/Pearl.png";
import fracture from "../../assets/Fracture.png";
import lotus from "../../assets/Lotus.png";

class Maps extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
        <div className="container d-flex flex-wrap justify-content-center">
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={bind} alt="" className={styles.mapSize} />
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
              <img src={ascent} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>ASCENT</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={split} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>SPLIT</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={icebox} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>ICEBOX</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={breeze} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>BREEZE</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={pearl} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>PEARL</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={fracture} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>FRACTURE</h2>
          </div>
          <div className={`col-6 mt-5 mb-5 ${styles.mobileSizing}`}>
            <div className="d-flex justify-content-center">
              <img src={lotus} alt="" className={styles.mapSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.mapNameFont}`}>LOTUS</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Maps
