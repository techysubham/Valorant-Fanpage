import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/valorant-logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: false
    };
    this.setScreenToMain = this.setScreenToMain.bind(this);
    this.setScreenToGameInfo = this.setScreenToGameInfo.bind(this);
    this.setScreenToAgentsInfo = this.setScreenToAgentsInfo.bind(this);
    this.setScreenToRoles = this.setScreenToRoles.bind(this);
    this.setScreenToMaps = this.setScreenToMaps.bind(this);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.showNavBar = this.showNavBar.bind(this)
  }

  toggleNavBar() {
    if (this.state.showNavBar === false) {
      this.setState({
        showNavBar: true
      })
    } else {
      this.setState({
        showNavBar: false
      })
    }
  }

  showNavBar() {
    if (this.state.showNavBar === true) {
      return (
        <div className={`${styles.fixed} ${styles.headerFont} ${styles.navBar} ${styles.slideOverFromRight} mt-4 text-center`}>
          <div className={styles.outerNavBar}>
            <p onClick={this.setScreenToGameInfo} className={`${styles.navBarLinks}`}>GAME</p>
            <p onClick={this.setScreenToAgentsInfo} className={`${styles.navBarLinks}`}>AGENTS</p>
            <p onClick={this.setScreenToRoles} className={`${styles.navBarLinks}`}>ROLES</p>
            <p onClick={this.setScreenToMaps} className={`${styles.navBarLinks}`}>MAPS</p>
          </div>
        </div>
      )
    }
  }

  setScreenToMain() {
    if (this.state.showNavBar === true) {
      this.setState({
        showNavBar: false
      })
    }
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("main");
  }

  setScreenToGameInfo() {
    if (this.state.showNavBar === true) {
      this.setState({
        showNavBar: false
      })
    }
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("gameInfo")
  }

  setScreenToAgentsInfo() {
    if (this.state.showNavBar === true) {
      this.setState({
        showNavBar: false
      })
    }
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("agentsInfo")
  }

  setScreenToRoles() {
    if (this.state.showNavBar === true) {
      this.setState({
        showNavBar: false
      })
    }
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("roles")
  }

  setScreenToMaps() {
    if (this.state.showNavBar === true) {
      this.setState({
        showNavBar: false
      })
    }
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("maps")
  }

  render() {
    return (
      <header>
        <div className={`d-flex align-items-center justify-content-around ${styles.mainHead}`}>
          <div className="col-6">
            <img src={logo} alt="" className={styles.logo} onClick={this.setScreenToMain}/>
          </div>
          <div className={`col-2 ${styles.showBars}`}>
            <i onClick={this.toggleNavBar} class={`fas fa-bars fa-2x ${styles.bars}`}></i>
              {this.showNavBar()}
          </div>
          <div className={`col-2 ${styles.headerFont} ${styles.navLinks}`}>
            <div onClick={this.setScreenToGameInfo} className={`d-flex justify-content-center align-items-center ${styles.headerNav}`}>
              <p>GAME</p>
            </div>
            <div onClick={this.setScreenToAgentsInfo} className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>AGENTS</p>
            </div>
            <div onClick={this.setScreenToRoles} className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>ROLES</p>
            </div>
            <div onClick={this.setScreenToMaps} className={`text-center justify-content-center d-flex align-items-center ${styles.headerNav}`}>
              <p>MAPS</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
