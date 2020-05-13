import React from "react";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import Footer from "./components/Footer/Footer";
import GameInfoSectionOne from "./components/GameInfoSectionOne/GameInfoSectionOne";
import GameInfoSectionTwo from "./components/GameInfoSectionTwo/GameInfoSectionTwo";
import Agents from "./components/Agents/Agents";
import Breach from "./components/AgentInfos/Breach";
import Brimstone from "./components/AgentInfos/Brimstone";
import Cypher from "./components/AgentInfos/Cypher";
import Jett from "./components/AgentInfos/Jett";
import Omen from "./components/AgentInfos/Omen";
import Phoenix from "./components/AgentInfos/Phoenix";
import Raze from "./components/AgentInfos/Raze";
import Sage from "./components/AgentInfos/Sage";
import Sova from "./components/AgentInfos/Sova";
import Viper from "./components/AgentInfos/Viper";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : "main"
    };
    this.setScreen = this.setScreen.bind(this);
    this.setScreenRender = this.setScreenRender.bind(this)
  }

  setScreen(screenName) {
    this.setState({
      screen: screenName
    })
  }

  setScreenRender() {
    if (this.state.screen === "main") {
      return (
        <IntroSection setScreen={this.setScreen}/>
      )
    } else if (this.state.screen === "gameInfo") {
      return (
        <div className="background">
          <GameInfoSectionOne/>
          <div className="container separatingBorder"></div>
          <GameInfoSectionTwo/>
        </div>
      )
    } else if (this.state.screen === "agentsInfo") {
      return (
        <Agents setScreen={this.setScreen}/>
      )
    } else if (this.state.screen === "breach") {
      return (
        <Breach />
      )
    } else if (this.state.screen === "brimstone") {
      return (
        <Brimstone />
      )
    } else if (this.state.screen === "cypher") {
      return (
        <Cypher />
      )
    } else if (this.state.screen === "jett") {
      return (
        <Jett />
      )
    } else if (this.state.screen === "omen") {
      return (
        <Omen />
      )
    } else if (this.state.screen === "phoenix") {
      return (
        <Phoenix />
      )
    } else if (this.state.screen === "raze") {
      return (
        <Raze />
      )
    } else if (this.state.screen === "sage") {
      return (
        <Sage />
      )
    } else if (this.state.screen === "sova") {
      return (
        <Sova />
      )
    } else if (this.state.screen === "viper") {
      return (
        <Viper />
      )
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header setScreen={this.setScreen}/>
        {this.setScreenRender()}
        <Footer/>
      </div>
    )
  }
}

export default App
