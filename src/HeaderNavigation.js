import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export default class HeaderNavigation extends React.Component {
  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
      <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
          <form className='navbar-form' action="">
            <Input type='text' placeholder='email' />{' '}
            <Input type='text' placeholder='password' />{' '}
            <Button bsStyle='success' type='submit'>Sign in</Button>
          </form>
        </Nav>
      </Navbar>
    );
  }
}
