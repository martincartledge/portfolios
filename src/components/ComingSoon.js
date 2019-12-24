import React, { Component } from 'react';
import HeaderLink from './HeaderLink';
import Project from './Project';

class ComingSoon extends Component {
  render() {
    return (
      <div>
      <div className="contact-space">Coming Soon</div>
        <div className="Second-header">
          <ul className="Second-nav align-center">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="about-me">About</HeaderLink>
            <HeaderLink to="my-work">Work</HeaderLink>
            <HeaderLink to="contact-me">Contact</HeaderLink>
          </ul>
        </div>
        <div className="container animated zoomIn">
          <img className="coming-soon" src="http://i.imgur.com/KI6aLju.png" alt={Project.title}/>
          <h3>This project is complete but, not live yet.</h3>
          <h4>Please check back soon.</h4>
        </div>
        <div className="animated zoomIn">
          <HeaderLink to="my-work">Go Back</HeaderLink>
        </div>
        <nav>
          <ul>
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

export default ComingSoon;
