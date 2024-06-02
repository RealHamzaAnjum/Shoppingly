import React from 'react';
import './Offers.css';
import exclusive_image from '../../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="offers container">
      <div className="row align-items-center">
        <div className="offers-left col-md-6 col-12">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCT</p>
          <button className="btn">Check Now</button>
        </div>
        <div className="offers-right col-md-6 col-12 text-center text-md-right">
          <img src={exclusive_image} alt='Exclusive Offer' />
        </div>
      </div>
    </div>
  );
};

export default Offers;
