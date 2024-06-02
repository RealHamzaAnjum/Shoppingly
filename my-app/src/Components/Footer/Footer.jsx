import './Footer.css';
import footer_logo from '../../Assets/logo_big.png';
import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="Footer ">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-md-4">
              <div className="footer-col1">
                <img src={footer_logo} alt="" />

                <div className="ft-icon pt-md-2 pb-md-4">
                  <NavLink to="#">
                    <span className="fb-icon">
                      <FaFacebookF />
                    </span>
                    <span className="fb-icon">
                      <FaTwitter />
                    </span>
                    <span className="fb-icon">
                      <BsInstagram />
                    </span>
                    <span className="fb-icon">
                      <FaLinkedin />
                    </span>
                  </NavLink>
                </div>

                <p>@2024 Copyright. All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-col2">
              <h5 className="ft_h5"> Get to know Us</h5>
                <ul >
                  <li className="nav-li">
                    <NavLink className='text-decoration-none'> Home</NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink className='text-decoration-none'>About</NavLink>
                  </li>

                  <li className="nav-li">
                    <NavLink className='text-decoration-none'> products</NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink className='text-decoration-none'> contact us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-col3">
              <h5 className="ft_h5"> Get to know Us</h5>
                <ul >
                  <li className="nav-li">
                    <NavLink className='text-decoration-none'> Home</NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink className='text-decoration-none'>About</NavLink>
                  </li>

                  <li className="nav-li">
                    <NavLink className='text-decoration-none'> products</NavLink>
                  </li>
                  <li className="nav-li">
                    <NavLink className='text-decoration-none'> contact us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-col4">
              <h5 className="ft_h5"> Contact</h5>
              <p className="py-2"><NavLink to='#'><span className="iconss">< MdWifiCalling3 /></span></NavLink> 03143679300</p>
              <p className="py-2"><NavLink to='#'><span className="iconss">< FaEnvelope /></span></NavLink> Hello Nazar Farid</p>
              <p className="py-2"><NavLink to='#'><span className="iconss">< IoLocation /></span></NavLink> Londaon</p>



              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

