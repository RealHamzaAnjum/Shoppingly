import React, { useState, useContext } from 'react';
import './CSS/Loginsignup.css';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Loginsignup = () => {
  const [state, setState] = useState("Login");
  const navigate = useNavigate();
  const { fetchCartItems } = useContext(ShopContext);
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log("login done", formdata);
      
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
  
    if (result.success) {
      localStorage.setItem("auth-token", JSON.stringify(result));
      await fetchCartItems(); 
      navigate("/");
    } else {
      alert("enter right email");
    }
  }

  const signup = async () => {
    console.log('signup done', formdata);
    
    let result = await fetch("http://localhost:4000/signup", {
      method: "post",
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      localStorage.setItem("auth-token", JSON.stringify(result));
      await fetchCartItems(); 
      navigate("/");
    } else {
      alert("already exit");
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 log">
      <div className="login-signup-container col-md-6 col-lg-4 p-4 shadow rounded bg-brown">
        <h1 className="text-center mb-4">{state}</h1>
        <div className="loginsignup-fields mb-3">
          {state === "Sign Up" && (
            <input name='username' value={formdata.username} onChange={changeHandler} type="text" className="form-control mb-3" placeholder="Your Name" />
          )}
          <input name='email' value={formdata.email} onChange={changeHandler} type="text" className="form-control mb-3" placeholder="Email Address" />
          <input name='password' value={formdata.password} onChange={changeHandler} type="password" className="form-control mb-3" placeholder="Password" />
        </div>
        <button className="btn btn-primary btn-block mb-3" onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ? (
          <p className="text-center loginsignup-login">
            Already have an account? <span className="text-primary" onClick={() => { setState("Login") }}>Login here</span>
          </p>
        ) : (
          <p className="text-center loginsignup-login">
            Create Account <span className="text-primary" onClick={() => { setState("Sign Up") }}>Click here</span>
          </p>
        )}
        <div className="loginsignup-agree d-flex align-items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <p className="mb-1">By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
