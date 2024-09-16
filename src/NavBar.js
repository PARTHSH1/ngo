import React from 'react';
import './NavBar.css';
import logo from './assets/logo.jpg'; // Adjust the path as per your structure

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
