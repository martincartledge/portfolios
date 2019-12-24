import React, { Component } from 'react';
import Project from './Project';
import Projects from './../data/projects';
import HeaderLink from './HeaderLink';

class Work extends Component {
  render() {
    let projectList = Projects.Web;
    let projects = projectList.map((project) => {
      return <Project title={project.title}
                      desc={project.description}
                      img={project.img_src}
                      lang={project.languages}
                      code={project.code}
                      gh={project.github}
                      key={project.id}
              />
    });
    return (
      <div>
      <div className="contact-space">Work</div>
        <div className="Second-header">
          <ul className="Second-nav align-center">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="about-me">About</HeaderLink>
            <HeaderLink to="my-work">Work</HeaderLink>
            <HeaderLink to="contact-me">Contact</HeaderLink>
          </ul>
        </div>
        <div className="animated zoomIn row">
          {projects}
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

export default Work;
