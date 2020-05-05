import React from "react"
import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection/IntroSection"
import Footer from "./components/Footer/Footer"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : null
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <IntroSection/>
        <Footer/>
      </div>
    )
  }
}

export default App
