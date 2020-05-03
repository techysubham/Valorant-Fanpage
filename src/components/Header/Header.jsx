import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/valorant-logo.png'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={`d-flex align-items-center ${styles.mainHead}`}>
          <div className="col-6">
            <img src={logo} alt="" className={styles.logo}/>
          </div>
          <div className="col-6">

          </div>
        </div>
      </header>
    )
  }
}

export default Header
