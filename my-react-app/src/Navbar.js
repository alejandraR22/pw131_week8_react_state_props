import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}



