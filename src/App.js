import React from 'react';
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';

import HeaderNavigation from './HeaderNavigation';
import Body from './Body';

global.React = React;

React.render(
  <div>
    <HeaderNavigation />
    <Body />
  </div>
  , document.getElementById('app'));
