import React from "react";
import styles from "./Header.module.css"

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.mainHead}>Hello</div>
      </header>
    )
  }
}

export default Header
