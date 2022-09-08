import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
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
          <Nav className="me-auto d-flex gap-3 nav-title">
            <Link className='nav-title text-decoration-none text-white' to="/">Now Playing</Link>
            <Link to="/favorite-movies" className='text-decoration-none text-white'>My Favorites</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavNavbar;
