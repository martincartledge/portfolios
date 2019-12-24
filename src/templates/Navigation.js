import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    const styles = {
      container: {
        height: '5rem',
        zIndex: '-1'
      },
      link: {
        textDecoration: 'none',
        padding: '1.5rem',
        position: 'relative',
        top: '1rem'
      },
      contact: {
        textDecoration: 'none',
        padding: '1rem',
        position: 'relative',
        float: 'right',
        lineHeight: '30px'
      },
      resume: {
        width: '1.2rem'
      },
      img: {
        width: '1.5rem'
      }
    };
    return (
      <header style={styles.container}>
        <NavLink exact style={styles.link} activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink style={styles.link} activeClassName="active" to="/about">
          Experience
        </NavLink>
        <NavLink style={styles.link} activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <div className="link-grid">
          <a
            style={styles.contact}
            href="https://www.linkedin.com/in/martincartledge/"
            target="_blank"
          >
            <img
              style={styles.img}
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-648db.appspot.com/o/linkedin.png?alt=media&token=fe8193b7-5284-4289-af95-e88403d532ae"
              type="image/png"
            />
          </a>
          <a
            style={styles.contact}
            href="https://www.github.com/martincartledge"
            target="_blank"
          >
            <img
              style={styles.img}
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-648db.appspot.com/o/github-logo.png?alt=media&token=4a115346-e037-49bc-b44f-7a5a43621a77"
              type="image/png"
            />
          </a>
          <a
            className="resume"
            style={styles.contact}
            href="https://drive.google.com/file/d/1_URdJI5bB_KNYq13qYT6AOz_QEeFN3Yw/view?usp=sharing"
            target="_blank"
          >
            <img
              style={styles.resume}
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-648db.appspot.com/o/download.png?alt=media&token=145bdb23-be35-4664-bac6-46e7de531e96"
            />
          </a>
          <a style={styles.contact} href="mailto:martincartledge90@gmail.com">
            <img
              style={styles.img}
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-648db.appspot.com/o/email.png?alt=media&token=1cb8dc90-1d60-4938-81fa-45c3ef9aa412"
            />
          </a>
        </div>
      </header>
    );
  }
}
export default Navigation;
