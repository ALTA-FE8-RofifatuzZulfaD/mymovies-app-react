import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../logo-movie.png';

const NavNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark' fixed='top' style={{paddingTop: '20px', paddingBottom: '20px'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top' 
            /> {''}
            MyMovie
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Now Playing</Nav.Link>
            <Nav.Link href="#features">My Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavNavbar;
