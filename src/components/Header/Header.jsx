import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/valorant-logo.png'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={`d-flex align-items-center justify-content-around ${styles.mainHead}`}>
          <div className="col-6">
            <img src={logo} alt="" className={styles.logo}/>
          </div>
          <div className={`col-2 d-flex justify-content-around ${styles.headerFont}`}>
            <div className={`d-flex justify-content-center align-items-center ${styles.headerNav}`}>
              <p>GAME</p>
            </div>
            <div className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>AGENTS</p>
            </div>
            <div className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>ROLES</p>
            </div>
            <div className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>MAPS</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
