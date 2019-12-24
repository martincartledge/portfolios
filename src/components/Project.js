import React from 'react';

const Project = props => (
  <div className="col-md-6">
    <div className="project box">
          <a href={props.code}><img src={props.img} alt={props.title} className="project-img"/></a>
          <h2 className="project-title">{props.title}</h2>
          <p className="project-lang">{props.lang}</p>
          <p>{props.desc}</p>
          <a className="btn" href={props.code}>View Site</a>
          <a className="btn" href={props.gh} target="_blank">View GitHub</a>
    </div>
  </div>
);

export default Project;
