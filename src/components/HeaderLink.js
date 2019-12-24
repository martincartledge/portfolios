import React from 'react';
import { Link } from 'react-router';

const HeaderLink = props => (
  <Link {...props} className="App-nav" activeClassName="active"/>
)

export default HeaderLink;
