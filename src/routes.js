import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './templates/App';
import Home from './templates/Home';
import About from './templates/About';
import Projects from './templates/Projects';

const routes = (
  <HashRouter history={createBrowserHistory()}>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </div>
  </HashRouter>
);

export default routes;
