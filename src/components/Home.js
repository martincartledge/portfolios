import React, { Component } from 'react';
import HeaderLink from './HeaderLink';

class Home extends Component {
  render() {
    return (
      <div className="home">
      <div className="contact-space">Welcome</div>
        <div className="App-header">
          <h2 className="animated inifinite bounceInLeft">My name is <span className="name">Martin Cartledge</span><span className="blink">|</span></h2>
          <h4 className="animated inifinite bounceInLeft">I am a <span className="title">Software Developer</span> in Phoenix, AZ</h4>
        </div>
        <div className="nav">
          <ul className="App-nav">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="about-me">About</HeaderLink>
            <HeaderLink to="my-work">Work</HeaderLink>
            <HeaderLink to="contact-me">Contact</HeaderLink>
          </ul>
        </div>
          <nav>
            <ul className="mobile-nav">
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="about-me">About</HeaderLink>
              <HeaderLink to="my-work">Work</HeaderLink>
              <HeaderLink to="contact-me">Contact</HeaderLink>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Home;
