import React, { Component } from 'react';
import HeaderLink from './HeaderLink';
import Project from './Project';

class NotFound extends Component {
  render() {
    return (
      <div>
      <div className="contact-space">Not Found</div>
        <div className="Second-header">
          <ul className="Second-nav align-center">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="about-me">About</HeaderLink>
            <HeaderLink to="my-work">Work</HeaderLink>
            <HeaderLink to="contact-me">Contact</HeaderLink>
          </ul>
        </div>
        <div className="container">
        <img className="not-found" src="http://i.imgur.com/3UW538o.png" alt={Project.title} />
          <h3>404</h3>
          <h4>This is not the page you are looking for.</h4>
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

export default NotFound;
