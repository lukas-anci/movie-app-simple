import React, { Component } from 'react';
// add image
import heroImg from './hero.jpg';
import './style.css';
class AppHeader extends Component {
  state = {};
  getDate() {
    const now = new Date();
    return now.toLocaleString();
  }
  render() {
    return (
      <header>
        <img className="hero" src={heroImg} alt="ocean" />
        <p className="hero-date">{this.getDate()}</p>
      </header>
    );
  }
}

export default AppHeader;
