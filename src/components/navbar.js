import React, { Component } from 'react'
import '../style/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='nav-cus'>
            <h1 className='logo'>Movie</h1>
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
      </nav>
    )
  }
}
