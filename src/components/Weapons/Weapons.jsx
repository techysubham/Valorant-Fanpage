import React from "react";
import styles from "./Weapons.module.css";
import classic from "../../assets/weapons/classic.png";
import shorty from "../../assets/weapons/shorty.png";
import freenzy from "../../assets/weapons/freenzy.png";
import ghost from "../../assets/weapons/ghost.png";
import sheriff from "../../assets/weapons/sheriff.png";
import stinger from "../../assets/weapons/stinger.png";
import spectre from "../../assets/weapons/spectre.png";
import bucky from "../../assets/weapons/bucky.png";
import judge from "../../assets/weapons/judge.png";
import bulldog from "../../assets/weapons/bulldog.png";
import guardian from "../../assets/weapons/guardian.png";
import phantom from "../../assets/weapons/phantom.png";
import vandal from "../../assets/weapons/vandal.png";
import marshal from "../../assets/weapons/marshal.png";
import operator from "../../assets/weapons/operator.png";
import ares from "../../assets/weapons/ares.png";
import odin from "../../assets/weapons/odin.png";
import melee from "../../assets/weapons/melee.png";

class Weapons extends React.Component {
  render() {
    return (
      <div className={`d-flex justify-content-center ${styles.background}`}>
        <div className="col-12 d-flex flex-wrap justify-content-around">
          <div id="classic" className={`col-3 m-4 ${styles.weaponContainer} ${styles.classicContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>CLASSIC</h2>
            <p className={`${styles.classicFire}`}>Primary Fire</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={classic} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.classicLeft}`}>
             <p>Primary Fire</p> 
             <p>Fire Rate</p> 
             <p>Magzine</p> 
            </div>
            <div className={`${styles.classicRight}`}>
             <p>Damage</p> 
             <p>Run speed</p> 
             <p>Reload Speed</p> 
            </div>
          </div>
          <div id="shorty" className={`col-3 m-4 ${styles.weaponContainer} ${styles.shortyContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>SHORTY</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={shorty} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="freenzy" className={`col-3 m-4 ${styles.weaponContainer} ${styles.freenzyContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>FREENZY</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={freenzy} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="ghost" className={`col-3 m-4 ${styles.weaponContainer} ${styles.ghostContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>GHOST</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={ghost} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="sheriff" className={`col-3 m-4 ${styles.weaponContainer} ${styles.sheriffContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>SHERIFF</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={sheriff} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="stinger" className={`col-3 m-4 ${styles.weaponContainer} ${styles.stingerContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>STINGER</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={stinger} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="spectre" className={`col-3 m-4 ${styles.weaponContainer} ${styles.spectreContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>SPECTRE</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={spectre} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="bucky" className={`col-3 m-4 ${styles.weaponContainer} ${styles.buckyContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>BUCKY</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={bucky} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="judge" className={`col-3 m-4 ${styles.weaponContainer} ${styles.judgeContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>JUDGE</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={judge} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="bulldog" className={`col-3 m-4 ${styles.weaponContainer} ${styles.bulldogContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>BULLDOG</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={bulldog} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="guardian" className={`col-3 m-4 ${styles.weaponContainer} ${styles.guardianContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>GUARDIAN</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={guardian} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="phantom" className={`col-3 m-4 ${styles.weaponContainer} ${styles.phantomContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>PHANTOM</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={phantom} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="vandal" className={`col-3 m-4 ${styles.weaponContainer} ${styles.vandalContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>VANDAL</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={vandal} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="marshal" className={`col-3 m-4 ${styles.weaponContainer} ${styles.marshalContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>MARSHAL</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={marshal} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="operator" className={`col-3 m-4 ${styles.weaponContainer} ${styles.operatorContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>OPERATOR</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={operator} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="ares" className={`col-3 m-4 ${styles.weaponContainer} ${styles.aresContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>ARES</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={ares} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="odin" className={`col-3 m-4 ${styles.weaponContainer} ${styles.odinContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>ODIN</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={odin} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
          <div id="melee" className={`col-3 m-4 ${styles.weaponContainer} ${styles.meleeContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>TACTICAL KNIFE</h2>
            <div className={`${styles.mobileCenter}`}>
              <img src={melee} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weapons
