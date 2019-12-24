import React from 'react';

const styling = {
  container: {
    width: '80vw',
    padding: '1rem 0 0 0'
  },
  desc: {
    width: '75vw',
    fontWeight: '300'
  },
  span: {
    color: 'var(--red)'
  },
  a: {
    color: 'var(--black)'
  }
};
const Project = props => (
  <div className="project" style={styling.container}>
    <h3>
      // <span style={styling.span}>{props.name}</span>,{' '}
      <a style={styling.a} href={props.website} target="_blank">
        {props.company}
      </a>
    </h3>
    {/* <p><a style={ styling.a } href={ props.website } target="_blank">{ props.company }</a></p> */}
    <h5>{props.languages}</h5>
    <div style={styling.desc}>{props.desc}</div>
  </div>
);

export default Project;
