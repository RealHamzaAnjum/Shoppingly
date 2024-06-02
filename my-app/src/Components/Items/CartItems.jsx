import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems container">
      <div className="row cartitems-header">
        <div className="col-md-3">Products</div>
        <div className="col-md-3">Title</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
        <div className="col-md-2">Remove</div>
      </div>
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div key={e.id} className="row cartitem mt-4">
              <div className=" col-md-3 cartitem-image">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cartitem-image img-fluid"
                />
              </div>
              <div className="col-md-4 cartitem-title">
                <p>{e.name}</p>
              </div>
              <div className="col-md-2 cartitem-price">
                <p>${e.new_price}</p>
              </div>
              <div className="col-md-2 cartitem-quantity">
                <button className="btn btn-sm btn-primary">
                  {CartItems[e.id]}
                </button>
              </div>
              <div className="col-md-1 cartitem-remove">
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <hr />
      <div className="cartitems-total d-flex">
        <div className="col-md-9">
          <h1>Cart Totals</h1>
          <div className="row cartitems-total-item">
            <div className="col-md-6">Subtotal</div>
            <div className="col-md-6">${getTotalCartAmount()}</div>
          </div>
          <div className="row cartitems-total-item">
            <div className="col-md-6">Shipping Fee</div>
            <div className="col-md-6">Free</div>
          </div>
          <div className="row cartitems-total-item">
            <div className="col-md-6">Total</div>
            <div className="col-md-6">${getTotalCartAmount()}</div>
          </div>
        </div>

        <div className="col-md-3 cartitems-actions mt-5">
          <Link to="/checkout">
            <button className="btn btn-primary btn-lg btn-block">
              Proceed to Checkout
            </button>
          </Link>
          <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartitem-promobox">
              <input type="text" placeholder="promo code" />
              <button className="btn btn-secondary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div id="card-element" style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default CartItems;
