import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [CartItems, setCartItems] = useState(getDefaultCart());

  const getProducts = async () => {
    try {
      let result = await fetch('http://localhost:4000/allproducts');
      result = await result.json();
      setAll_Product(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCartItems = async () => {
    const authToken = JSON.parse(localStorage.getItem('auth-token'))?.token;
    if (authToken) {
      try {
        let response = await fetch("http://localhost:4000/getcart", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'auth-token': authToken, 
            'Content-Type': 'application/json',
          },
          body: "", 
        });
        let data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }
  };

  useEffect(() => {
    getProducts();
    fetchCartItems();
  }, []);

  const addToCart = async (itemId) => {
    const authToken = JSON.parse(localStorage.getItem('auth-token'))?.token;
    if (authToken) {
      try {
        let response = await fetch("http://localhost:4000/addtocart", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'auth-token': authToken, 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }), 
        });
        let data = await response.json();
        setCartItems(data);
        
        fetchCartItems();
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    } else {
      console.error('No auth token found');
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    const authToken = JSON.parse(localStorage.getItem('auth-token'))?.token;
    if (authToken) {
      try {
        let response = await fetch("http://localhost:4000/removecart", {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'auth-token': authToken, 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId }), 
        });
        let data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    } else {
      console.error('No auth token found');
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * CartItems[item];
        }
      }
    }
    return totalAmount; 
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in CartItems) {
      if (CartItems[item] > 0) {
        totalItem += CartItems[item];
      }
    }
    return totalItem;
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    setCartItems(getDefaultCart());  // Clear cart items
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    CartItems,
    addToCart,
    removeFromCart,
    logout,
    fetchCartItems  
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
