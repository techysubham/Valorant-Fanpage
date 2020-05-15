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
          <div className="col-6 mt-5 mb-5">
            <div className={`d-flex justify-content-center ${styles.slideOverFromLeft}`}>
              <img src={initiator} alt="" className={styles.roleImageSize}/>
            </div>
            <h2 className={`text-center mt-3 ${styles.roleNameFont} ${styles.fadeIn}`}>INITIATOR</h2>
            <div className="d-flex justify-content-center">
              <div className={`col-10 mt-3 ${styles.fadeIn}`}>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Initiators challenge angles by setting up their team to enter contested ground and push defenders away.</p>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Agents: Breach, Sova</p>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5 mb-5">
            <div className={`d-flex justify-content-center ${styles.slideOverFromRight}`}>
              <img src={controller} alt="" className={styles.roleImageSize}/>
            </div>
            <h2 className={`text-center mt-3 ${styles.roleNameFont} ${styles.fadeIn}`}>CONTROLLER</h2>
            <div className="d-flex justify-content-center">
              <div className={`col-10 mt-3 ${styles.fadeIn}`}>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Controllers are experts in slicing up dangerous territory to set their team up for success.</p>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Agents: Brimstone, Omen, Viper</p>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5 mb-5">
            <div className={`d-flex justify-content-center ${styles.slideOverFromLeft}`}>
              <img src={duelist} alt="" className={styles.roleImageSize} />
            </div>
            <h2 className={`text-center mt-3 ${styles.roleNameFont} ${styles.fadeIn}`}>DUELIST</h2>
            <div className="d-flex justify-content-center">
              <div className={`col-10 mt-3 ${styles.fadeIn}`}>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Duelist are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagement first.</p>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Agents: Jett, Phoenix, Raze</p>
              </div>
            </div>

          </div>
          <div className={`col-6 mt-5 mb-5`}>
            <div className={`d-flex justify-content-center ${styles.slideOverFromRight}`}>
              <img src={sentinel} alt="" className={`${styles.roleImageSize}`} />
            </div>
            <h2 className={`text-center mt-3 ${styles.roleNameFont} ${styles.fadeIn}`}>SENTINEL</h2>
            <div className="d-flex justify-content-center">
              <div className={`col-10 mt-3 ${styles.fadeIn}`}>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.</p>
                <p className={`text-center ${styles.roleDescriptionFont}`}>Agents: Cypher, Sage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Roles
