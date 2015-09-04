import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import 'bootstrap/less/bootstrap.less';

import HeaderNavigation from './HeaderNavigation';

React.render(
  <div>
    <HeaderNavigation />
  </div>
  , document.getElementById('app'));
