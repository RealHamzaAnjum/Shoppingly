import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import "./CheckoutPage.css";
import { ShopContext } from "../Context/ShopContext";


const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const { getTotalCartAmount } = useContext(ShopContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authToken = JSON.parse(localStorage.getItem('auth-token'))?.token;
        if (authToken) {
          const config = {
            headers: {
              "auth-token": authToken,
            },
          };
          const response = await axios.get("http://localhost:4000/userinfo", config);
          setForm({
            ...form,
            name: response.data.name,
            email: response.data.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };


      fetchUserData();
    }, []); 
  

    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/placeorder", form);
      console.log("Order processed", response.data);
      window.location.href = "https://buy.stripe.com/test_aEUdTncyJepP13i000";


    } catch (error) {
      console.error("There was an error processing your order!", error);
      alert("Failed to process order");
    }
  };

  return (
    <div className="checkout-page container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row cartitems-total-item">
            <div className="col-md-6">Total</div>
            <div className="col-md-6">${getTotalCartAmount()}</div>
          </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Process Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
