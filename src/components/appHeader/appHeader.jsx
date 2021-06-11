import React, { Component } from 'react';
// add image
import heroImg from './hero.jpg';
import './style.css';
class AppHeader extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="hero" src={heroImg} alt="ocean" />
      </header>
    );
  }
}

export default AppHeader;
