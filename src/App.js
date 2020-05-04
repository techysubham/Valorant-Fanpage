import React from "react"
import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection/IntroSection"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <IntroSection/>
      </div>
    )
  }
}

export default App
