import React, { Component } from 'react';
import HeaderLink from './HeaderLink';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="Second-header">
          <ul className="Second-nav align-center">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="about-me">About</HeaderLink>
            <HeaderLink to="my-work">Work</HeaderLink>
            <HeaderLink to="contact-me">Contact</HeaderLink>
          </ul>
        </div>
        <div className="contact">
          <div className="contact-space">Contact</div>
            <div className="icon animated zoomIn">
              <a href="https://github.com/martincartledge" target="_blank"><i className="fa fa-github fa-fw" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/martincartledge" target="_blank"><i className="fa fa-linkedin-square fa-fw" aria-hidden="true"></i></a>
              <a href="https://drive.google.com/file/d/0B7PDCanvb_R5Sk45SDIzUVFkSXM/view?usp=sharing" target="_blank"><i className="fa fa-file-text-o fa-fw" aria-hidden="true"></i></a>
            </div>
            <div className="contact-info animated zoomIn">
              <h3><a className="email" href="mailto:martincartledge90@gmail.com">martincartledge90@gmail.com</a></h3>
              <h3 className="number">719<span className="orange-dot">.</span> 761 <span className="orange-dot">.</span> 0417</h3>
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

export default Contact;
