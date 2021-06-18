import React, { Component } from 'react';
// add image
import heroImg from './hero.jpg';
import './style.css';
class AppHeader extends Component {
  state = {
    // doom: 5,
    // time: new Date().toLocaleString(),
  };

  // componentDidMount() {
  //   this.handleDoom();
  //   this.getDate();
  // }
  // handleDoom() {
  //   setInterval(() => {
  //     if (this.state.doom === 0) return this.setState({ doom: 5 });
  //     this.setState({ doom: this.state.doom - 1 });
  //   }, 1000);
  // }
  getDate = () => {
    const now = new Date().toLocaleString();
    return now;
  };
  handleImageClick = () => {
    setInterval(() => {
      console.log('prasau?');
    }, 1000);
  };
  render() {
    return (
      <header>
        <img
          onClick={this.handleImageClick}
          className="hero"
          src={heroImg}
          alt="ocean"
        />
        <p className="hero-date">{this.getDate()}</p>
        {/* <h2>Doom in {this.state.doom}</h2> */}
      </header>
    );
  }
}

export default AppHeader;
