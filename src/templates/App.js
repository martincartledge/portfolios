import React, { Component } from 'react';

import Navigation from './Navigation';
import Home from './Home';

import '../styles/Global.css';

class App extends Component {
  render() {
    const styles = {
      app: {
        display: 'block'
      }
    };
    return (
      <div style={styles.app}>
        <Navigation />
      </div>
    );
  }
}

export default App;
