import React, { Component } from 'react';
import Project from './Project';
import ProjectData from '../data/projects';
import Navigation from './Navigation';

class Projects extends Component {
  render() {
    const projectList = ProjectData.Web;
    let projects = projectList.map(project => {
      return (
        <Project
          name={project.name}
          company={project.company}
          desc={project.desc}
          website={project.website}
          languages={project.languages}
          key={project.id}
        />
      );
    });
    const styling = {
      container: {
        width: '100vw',
        margin: '0 auto 8rem',
        position: 'relative'
      },
      title: {
        textAlign: 'center'
      },
      projectContainer: {
        width: '80vw',
        margin: '0 10vw',
        display: 'grid'
      }
    };
    return (
      <div>
        <Navigation />
        <div style={styling.container} className="projects">
          <h1 style={styling.title}>
            /* <span className="name">Projects</span> */
          </h1>
          <div style={styling.projectContainer}>{projects}</div>
        </div>
      </div>
    );
  }
}

export default Projects;
