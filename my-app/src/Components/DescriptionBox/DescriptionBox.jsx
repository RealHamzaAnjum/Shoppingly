import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox container">
      <div className="descriptionbox-nevigator row mb-3">
        <div className="descriptionbox-nav-box col-6 col-md-3">Description</div>
        <div className="descriptionbox-nav-box-fade col-6 col-md-3">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description row">
        <div className="col-12">
          <p>
            An e-commerce website is an online platform that facilitates buying and selling products 
            or services over the internet, serving as a virtual marketplace where businesses and individuals 
            showcase their products, interact with customers, and conduct transactions without the need for 
            a physical presence. E-commerce websites have gained immense popularity due to their convenient 
            accessibility and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services with a detailed description,
            images, prices, and any available varieties (e.g., sizes, colors). Each product usually 
            has its own details with relevant information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
