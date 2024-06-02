import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Shop from './Pages/shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LogiSignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';
import CheckoutPage from './Components/CheckoutPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/mens' element={<ShopCategory banner={men_banner}  category="mens"/>}/>
                    <Route path='/womens' element={<ShopCategory banner={women_banner}  category="women"/>}/>
                    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
                    <Route path='/Product/:ProductId' element={<Product/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path="/checkout" element={<CheckoutPage />} />

                    <Route path='/login' element={<LogiSignup/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
