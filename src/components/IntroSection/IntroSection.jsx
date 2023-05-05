import React from "react";
import styles from "./IntroSection.module.css";
import logo from '../../assets/valorant.png'

class IntroSection extends React.Component {
  constructor(props) {
    super(props);
    this.setToGameInfoScreen = this.setToGameInfoScreen.bind(this)
    this.state = {
      clicks: 0,
      backgroundUrl: "url('https://images3.alphacoders.com/114/1149319.jpg')",
    };
    this.carousel = this.carousel.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    // this.slideshow = this.slideshow.bind(this);
  }
  changeBackground() {
    const bgList = [
      "url('https://images3.alphacoders.com/114/1149319.jpg')",
      "url('https://rare-gallery.com/mocahbig/394521-valorant-game-agents-hero-4k-pc-wallpaper.jpg')",
      "url('https://images.alphacoders.com/128/1282982.jpg')",
    ];
    let clicks = this.state.clicks + 1;
    if (clicks >= bgList.length) {
      clicks = 0;
    }
    this.setState({
      clicks: clicks,
      backgroundUrl: bgList[clicks],
    });
  }
  carousel() {
    let clicks = this.state.clicks;
    if (clicks === 0) {
      clicks = 2;
    } else {
      clicks--;
    }
    this.setState({ clicks });
    this.changeBackground();
  }
  componentDidMount() {
  console.log("here")
  try {
    setInterval(() => {
      this.carousel(this.state.clicks ++);
    }, 5000);
  } catch (error) {
    console.log('Error:', error);
  }
  }

  setToGameInfoScreen() {
    const setScreenMethod = this.props.setScreen;
    setScreenMethod("gameInfo")
  }
  render() {
    return (
      <div className={`d-flex justify-content-center align-items-center ${styles.introSectionBackground}`} style={{ backgroundImage: this.state.backgroundUrl }}>
        <div className={`d-flex justify-content-center ${styles.prev}`} onClick={() => this.carousel(this.state.clicks + 1)}>
          <p  className={`${styles.prevIcon}`} >&#10094;</p>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={`${styles.slideIn} ${styles.valorantLogo}`} />
          <div className="d-flex justify-content-center">
            <div className={`d-flex justify-content-center align-items-center ${styles.introBox} ${styles.slideIn}`}>
              <div className={`${styles.innerIntroBox}`}>
                <div>
                  <h5 className={`mt-3 text-center ${styles.introBoxFont}`}>A 5v5 character-based <br></br>tactical shooter by Riot Games</h5>
                  <div className="d-flex justify-content-center">
                    <div onClick={this.setToGameInfoScreen} className={`mt-4 text-center d-flex justify-content-center align-items-center ${styles.learnMoreButton} ${styles.font} ${styles.fourth}`}>Learn More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-center ${styles.next}`} onClick={() => this.carousel(this.state.clicks - 1)}>
          <p className={`${styles.nextIcon}`} >&#10095;</p>
        </div>
      </div>

    )
  }
}
export default IntroSection;
