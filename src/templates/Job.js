import React from 'react';

const styling = {
  ul: {
    listStyleType: 'none',
    padding: '0'
  },
  li: {
    padding: '.5rem 0'
  },
  span: {
    color: 'var(--red)'
  }
};

const Job = props => (
  <div>
    <h3>
      // <span style={styling.span}>{props.title}</span>, {props.company}
    </h3>
    <h4>{props.length}</h4>
    <h5>{props.langauges}</h5>
    <ul style={styling.ul}>
      <li style={styling.li}>{props.firstPoint}</li>
      <li style={styling.li}>{props.secondPoint}</li>
      <li style={styling.li}>{props.thirdPoint}</li>
    </ul>
  </div>
);

export default Job;
