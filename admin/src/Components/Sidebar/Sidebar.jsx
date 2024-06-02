import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import carticon from '../../assets/cart_icon.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={carticon} alt="Cart Icon" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={carticon} alt="Cart Icon" />
          <p>List Product</p>
        </div>
      </Link>
      <Link to='/orders' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={carticon} alt="Cart Icon" />
          <p>Orders</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
