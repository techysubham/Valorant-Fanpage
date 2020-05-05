import React from "react";
import styles from "./Footer.module.css";
import fistLogo from "../../assets/fistLogo.png"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={`${styles.mainFooter}`}>
          <div>
            <img src={fistLogo} alt="" className={styles.fistLogoSize}/>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
