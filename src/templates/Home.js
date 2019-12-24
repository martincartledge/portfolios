import React, { Component } from 'react';
import Navigation from './Navigation';

class Home extends Component {
  render() {
    const styling = {
      projectContainer: {
        width: '80vw',
        margin: '10vh 10vw',
        display: 'grid',
        fontWeight: '300'
      },
      span: {
        color: 'var(--red)'
      },
      spanH1: {
        color: 'var(--red)',
        fontWeight: '600',
        width: '100%'
      },
      h2: {
        fontWeight: '300',
        lineHeight: '50px'
      },
      title: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '3rem',
        height: 'auto',
        width: '80vw'
      }
    };
    return (
      <div>
        <Navigation />
        <div style={styling.projectContainer} className="home">
          <h1 className="name-heading" style={styling.title}>
            My name is{' '}
            <span className="name" style={styling.spanH1}>
              Martin
            </span>
          </h1>
          <h1 style={styling.h2}>
            I am a software developer with a{' '}
            <span style={styling.span}>passion</span> for creating{' '}
            <span style={styling.span}>sleek, powerful applications</span>. As a
            graphic designer turned developer, I have a strong foundation in{' '}
            <span style={styling.span}>User Experience</span> and{' '}
            <span style={styling.span}>Interfaces</span>. That foundation has
            been matched with an{' '}
            <span style={styling.span}>undeniable drive</span> to build{' '}
            <span style={styling.span}>intuitive, thoughtful</span> fullstack
            applications as well.
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
