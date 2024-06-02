import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems, fetchCartItems, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogin = async () => {
    await fetchCartItems(); // Fetch cart items after login
    navigate('/Login');
  };

  const toggleNavbar = () => {
    document.getElementById('navbarNav').classList.toggle('visible');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="logo" width="30" height="30" />
          <span className="ms-2">SHOPPER</span>
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <div id="navbarNav" className="navbar-nav">
        <Link to="/" onClick={() => setMenu("Shop")} className={`nav-link ${menu === "Shop" ? "active" : ""}`}>Shop</Link>
        <Link to="/mens" onClick={() => setMenu("Mens")} className={`nav-link ${menu === "Mens" ? "active" : ""}`}>Men</Link>
        <Link to="/womens" onClick={() => setMenu("Womens")} className={`nav-link ${menu === "Womens" ? "active" : ""}`}>Women</Link>
        <Link to="/kids" onClick={() => setMenu("Kids")} className={`nav-link ${menu === "Kids" ? "active" : ""}`}>Kids</Link>
      </div>
      <div className="navbar-login-cart">
        {localStorage.getItem('auth-token') ?
          <button onClick={handleLogout} className="btn btn-outline-primary">LogOut</button>
          : <button onClick={handleLogin} className="btn btn-outline-primary">Login</button>
        }
        <Link to="/Cart">
          <div className="cart-container">
            <img src={cart_icon} alt="cart" width="30" height="30" />
            <span className="badge bg-primary rounded-pill">{getTotalCartItems()}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
