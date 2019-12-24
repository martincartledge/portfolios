import React, { Component } from 'react';
import HeaderLink from './HeaderLink';

class About extends Component {
  render() {
    return (
      <div>
        <div className="contact-space">About</div>
          <div className="Second-header">
            <ul className="Second-nav align-center">
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="about-me">About</HeaderLink>
              <HeaderLink to="my-work">Work</HeaderLink>
              <HeaderLink to="contact-me">Contact</HeaderLink>
            </ul>
          </div>
          <div className="about animated fadeInLeftBig">
            <div className="about-intro">
              <h5>My goal is to bridge the gap between the visual and the complex to create <span className="em">powerful</span>, <span className="strong">thoughtful</span> solutions.</h5>
            </div>
            <div className="skillset">
              <h5>Summary</h5>
            </div>
              <p className="about-intro">As a graphic designer turned web developer, I have always been drawn to complex, delicate, and creative outlets. I am seeking software development opportunities in a environment that encourages thoughtful, unique projects and that stretches my potential on both a professional and personal level.</p>
            <div className="skillset">
              <h5>Skillset</h5>
            </div>
            <div className="about-intro">
              <ul>
                <button className="btn skill-btn">Javascript</button>
                <button className="btn skill-btn">Angular 2</button>
                <button className="btn skill-btn">React</button>
                <button className="btn skill-btn">Node</button>
                <button className="btn skill-btn">Ember</button>
                <button className="btn skill-btn">jQuery</button>
                <button className="btn skill-btn">PHP</button>
                <button className="btn skill-btn">Drupal</button>
                <button className="btn skill-btn">Wordpress</button>
                <button className="btn skill-btn">HTML</button>
                <button className="btn skill-btn">CSS</button>
                <button className="btn skill-btn">Sass</button>
                <button className="btn skill-btn">Git</button>
                <button className="btn skill-btn">Agile</button>
                <button className="btn skill-btn">SQL</button>
                <button className="btn skill-btn">Photoshop</button>
                <button className="btn skill-btn">InDesign</button>
              </ul>
            </div>
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

export default About;
