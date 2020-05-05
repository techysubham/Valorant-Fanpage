import React from "react";
import styles from "./Footer.module.css";
import fistLogo from "../../assets/fistLogo.png"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={`${styles.mainFooter}`}>
          <div>
            <div className="d-flex justify-content-center">
              <img src={fistLogo} alt="" className={`mt-4 ${styles.fistLogoSize}`}/>
            </div>
            <div>
              <p className={`d-flex justify-content-center ${styles.footerNote}`}>Notice: This is a fake Valorant game website. I do not have any business with Riot Games.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
