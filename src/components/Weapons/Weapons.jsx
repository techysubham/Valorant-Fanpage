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
import primaryfirelogo from "../../assets/weapons/icons/primaryFire.png";
import fireratelogo from "../../assets/weapons/icons/fireRate.png";
import maglogo from "../../assets/weapons/icons/mag.png";
import reloadlogo from "../../assets/weapons/icons/reload.png";
import penlogo from "../../assets/weapons/icons/pen.png";
import damagelogo from "../../assets/weapons/icons/damage.png";

class Weapons extends React.Component {
  render() {
    return (
      <div className={`d-flex justify-content-center ${styles.background}`}>
        <div className="col-12 d-flex flex-wrap justify-content-around">
          <div id="classic" className={`col-3 m-4 ${styles.weaponContainer} ${styles.classicContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>CLASSIC</h2>
            <p className={`${styles.weaponType}`}>SIDEARMS</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={classic} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />6.75 RDS</p>
              <p><img src={maglogo} /> 12 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 78   <img src={damagelogo} /></p>
              <p> 1.75s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="shorty" className={`col-3 m-4 ${styles.weaponContainer} ${styles.shortyContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>SHORTY</h2>
            <p className={`${styles.weaponType}`}>SIDEARMS</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={shorty} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />3.33 RDS</p>
              <p><img src={maglogo} /> 2 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 24   <img src={damagelogo} /></p>
              <p> 1.75s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="freenzy" className={`col-3 m-4 ${styles.weaponContainer} ${styles.freenzyContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>FRENZY</h2>
            <p className={`${styles.weaponType}`}>SIDEARMS</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={freenzy} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />10 RDS</p>
              <p><img src={maglogo} /> 13 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 78  <img src={damagelogo} /></p>
              <p> 1.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="ghost" className={`col-3 m-4 ${styles.weaponContainer} ${styles.ghostContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>GHOST</h2>
            <p className={`${styles.weaponType}`}>SIDEARMS</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={ghost} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />6.75 RDS</p>
              <p><img src={maglogo} /> 15 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Medium <img src={penlogo} /></p>
              <p> 105  <img src={damagelogo} /></p>
              <p> 1.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="sheriff" className={`col-3 m-4 ${styles.weaponContainer} ${styles.sheriffContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>SHERIFF</h2>
            <p className={`${styles.weaponType}`}>SIDEARMS</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={sheriff} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />4 RDS</p>
              <p><img src={maglogo} /> 6 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  High <img src={penlogo} /></p>
              <p> 159  <img src={damagelogo} /></p>
              <p> 2.25s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="stinger" className={`col-3 m-4 ${styles.weaponContainer} ${styles.stingerContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>STINGER</h2>
            <p className={`${styles.weaponType}`}>SMG</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={stinger} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />16 RDS</p>
              <p><img src={maglogo} /> 20 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 67  <img src={damagelogo} /></p>
              <p> 2.25s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="spectre" className={`col-3 m-4 ${styles.weaponContainer} ${styles.spectreContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>SPECTRE</h2>
            <p className={`${styles.weaponType}`}>SMG</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={spectre} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />13.33 RDS</p>
              <p><img src={maglogo} /> 30 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 78  <img src={damagelogo} /></p>
              <p> 2.25s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="bucky" className={`col-3 m-4 ${styles.weaponContainer} ${styles.buckyContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>BUCKY</h2>
            <p className={`${styles.weaponType}`}>SHORTGUN</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={bucky} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />1.1 RDS</p>
              <p><img src={maglogo} /> 5 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 40  <img src={damagelogo} /></p>
              <p> 2.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="judge" className={`col-3 m-4 ${styles.weaponContainer} ${styles.judgeContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>JUDGE</h2>
            <p className={`${styles.weaponType}`}>SHORTGUN</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={judge} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />3.5 RDS</p>
              <p><img src={maglogo} /> 7 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 34  <img src={damagelogo} /></p>
              <p> 2.2s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="bulldog" className={`col-3 m-4 ${styles.weaponContainer} ${styles.bulldogContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>BULLDOG</h2>
            <p className={`${styles.weaponType}`}>RIFLES</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={bulldog} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />10 RDS</p>
              <p><img src={maglogo} /> 24 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Medium <img src={penlogo} /></p>
              <p> 115  <img src={damagelogo} /></p>
              <p> 2.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="guardian" className={`col-3 m-4 ${styles.weaponContainer} ${styles.guardianContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>GUARDIAN</h2>
            <p className={`${styles.weaponType}`}>RIFLES</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={guardian} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />5.25 RDS</p>
              <p><img src={maglogo} /> 12 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  High <img src={penlogo} /></p>
              <p> 195  <img src={damagelogo} /></p>
              <p> 2.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="phantom" className={`col-3 m-4 ${styles.weaponContainer} ${styles.phantomContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>PHANTOM</h2>
            <p className={`${styles.weaponType}`}>RIFLES</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={phantom} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />11 RDS</p>
              <p><img src={maglogo} /> 30 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Medium <img src={penlogo} /></p>
              <p> 156  <img src={damagelogo} /></p>
              <p> 2.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="vandal" className={`col-3 m-4 ${styles.weaponContainer} ${styles.vandalContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>VANDAL</h2>
            <p className={`${styles.weaponType}`}>RIFLES</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={vandal} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />9.75 RDS</p>
              <p><img src={maglogo} /> 25 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Medium <img src={penlogo} /></p>
              <p> 160  <img src={damagelogo} /></p>
              <p> 2.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="marshal" className={`col-3 m-4 ${styles.weaponContainer} ${styles.marshalContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>MARSHAL</h2>
            <p className={`${styles.weaponType}`}>SNIPER</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={marshal} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />1.5 RDS</p>
              <p><img src={maglogo} /> 5 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Medium <img src={penlogo} /></p>
              <p> 202  <img src={damagelogo} /></p>
              <p> 2.5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="operator" className={`col-3 m-4 ${styles.weaponContainer} ${styles.operatorContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>OPERATOR</h2>
            <p className={`${styles.weaponType}`}>SNIPER</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={operator} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Semi</p>
              <p><img src={fireratelogo} />0.6 RDS</p>
              <p><img src={maglogo} /> 5 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  High <img src={penlogo} /></p>
              <p> 255  <img src={damagelogo} /></p>
              <p> 3.7s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="ares" className={`col-3 m-4 ${styles.weaponContainer} ${styles.aresContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>ARES</h2>
            <p className={`${styles.weaponType}`}>LMG</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={ares} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />13 RDS</p>
              <p><img src={maglogo} /> 50 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  High <img src={penlogo} /></p>
              <p> 72  <img src={damagelogo} /></p>
              <p> 3.25s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="odin" className={`col-3 m-4 ${styles.weaponContainer} ${styles.odinContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>ODIN</h2>
            <p className={`${styles.weaponType}`}>LMG</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={odin} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Auto</p>
              <p><img src={fireratelogo} />12 RDS</p>
              <p><img src={maglogo} /> 100 RDS</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  High <img src={penlogo} /></p>
              <p> 95  <img src={damagelogo} /></p>
              <p> 5s <img src={reloadlogo} /></p>
            </div>
          </div>
          <div id="melee" className={`col-3 m-4 ${styles.weaponContainer} ${styles.meleeContainer}`}>
            <h2 className={`m-3 p-2 ${styles.weaponName} ${styles.slideIn}`}>KNIFE</h2>
            <p className={`${styles.weaponType}`}>MELEE</p>
            <div className={`${styles.mobileCenter}`}>
              <img src={melee} alt="" className={`${styles.weaponImage} ${styles.slideIn}`} />
            </div>
            <div className={`${styles.leftFlank}`}>
              <p> <img src={primaryfirelogo} /> Stab</p>
              <p><img src={fireratelogo} />N.A</p>
              <p><img src={maglogo} /> N.A</p>
            </div>
            <div className={`${styles.rightFlank}`}>
              <p>  Low <img src={penlogo} /></p>
              <p> 75  <img src={damagelogo} /></p>
              <p> N.A <img src={reloadlogo} /></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weapons
