import React, { Component } from 'react'
import '../style/navbar.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default class NavNavbar extends Component {
  render() {
    return (
      <Navbar className='navbar' >
        <div className='nav-cus' bg="dark">
            <h1 className='logo font-bold'>Movie</h1>
            <div className='nav-list'>
                <ul className='nav-item'>
                    <li>Home</li>
                    <li>Favorites</li>
                    <li>
                        <button className='search-button'>Search</button>
                    </li>
                </ul>
            </div>
        </div>
      </Navbar>
    )
  }
}
