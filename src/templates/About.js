import React, { Component } from 'react';
import Job from './Job';
import JobData from '../data/jobs';
import Navigation from './Navigation';

class About extends Component {
  render() {
    const jobsList = JobData.Exp;
    let jobs = jobsList.map(job => {
      return (
        <Job
          company={job.company}
          title={job.title}
          length={job.length}
          langauges={job.langauges}
          firstPoint={job.firstPoint}
          secondPoint={job.secondPoint}
          thirdPoint={job.thirdPoint}
          key={job.id}
        />
      );
    });
    const styling = {
      container: {
        width: '100vw',
        margin: '0 auto 8rem'
      },
      title: {
        textAlign: 'center'
      },
      projectContainer: {
        width: '80vw',
        margin: '0 10vw',
        display: 'grid',
        fontWeight: '300'
      }
    };
    return (
      <div>
        <Navigation />
        <div style={styling.container} className="about">
          <h1 style={styling.title}>
            /* <span className="name">Experience</span> */
          </h1>
          <div style={styling.projectContainer}>{jobs}</div>
        </div>
      </div>
    );
  }
}

export default About;
