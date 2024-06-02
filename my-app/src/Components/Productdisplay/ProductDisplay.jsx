import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../../Assets/star_icon.png';
import star_dull_icon from '../../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="container">
      <div className="row productdisplay">
        <div className="col-lg-6 col-md-6 order-md-1 order-2 productdisplay-left">
          <div className="row">
            <div className="col-md-3 col-12 productdisplay-image-list d-md-block d-flex flex-wrap justify-content-between">
              <img src={product.image} alt={product.name} className="img-thumbnail mb-2" />
              <img src={product.image} alt={product.name} className="img-thumbnail mb-2" />
              <img src={product.image} alt={product.name} className="img-thumbnail mb-2" />
              <img src={product.image} alt={product.name} className="img-thumbnail mb-2" />
            </div>
            <div className="col-md-9 col-12 productdisplay-image">
              <img className="productdisplay-main-img img-fluid" src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 order-md-2 order-3 productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star d-flex align-items-center mb-3">
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_icon} alt="star" />
            <img src={star_dull_icon} alt="star dull" />
            <p className="ml-2">(122)</p>
          </div>
          <div className="productdisplay-right-prices d-flex mb-3">
            <div className="productdisplay-right-price-old text-muted">${product.old_price}</div>
            <div className="productdisplay-right-price-new ml-3">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description mb-3">
            A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
          </div>
          <div className="productdisplay-right-size mb-3">
            <h2>Select Size</h2>
            <div className="productdisplay-right-sizes d-flex flex-wrap">
              <div className="p-2">S</div>
              <div className="p-2">M</div>
              <div className="p-2">L</div>
              <div className="p-2">XL</div>
              <div className="p-2">XXL</div>
            </div>
          </div>
          <button className="btn btn-primary mb-3" onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
          <p className="productdisplay-right-category"><span>Category :</span> Women, T-Shirt, Crop Top</p>
          <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
