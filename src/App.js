import React from 'react';
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';

import HeaderNavigation from './HeaderNavigation';
import Body from './Body';
import Footer from './Footer';

global.React = React;

React.render(
  <div>
    <HeaderNavigation />
    <Body />
    <Footer />
  </div>
  , document.getElementById('app'));
