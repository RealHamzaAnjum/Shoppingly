import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const toggleNavbar = () => {
    const navbarNav = document.querySelector('.navbar-login-cart');
    navbarNav.classList.toggle('visible');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img className='nav-logo' src={logo} alt="logo" />
          <span className="ms-2">SHOPPER</span>
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <div className="navbar-login-cart">
        <img className='nav-profile' src={profile} alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
