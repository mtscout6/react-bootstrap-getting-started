import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import InlineLogin from './InlineLogin';

export default class HeaderNavigation extends React.Component {
  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
      <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
          <InlineLogin className='navbar-form' />
        </Nav>
      </Navbar>
    );
  }
}
