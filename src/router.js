import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

// Routes
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';

const routes = (
  <Router history={ hashHistory }>
    <Route component={ App } >
      <Route path="/" component={ Home } />
      <Route path="about-me" component={ About } />
      <Route path="my-work" component={ Work } />
      <Route path="contact-me" component={ Contact } />
      <Route path="coming-soon" component={ ComingSoon } />
      <Route path="*" component={ NotFound } />
    </Route>
  </Router>
);

export default routes;
