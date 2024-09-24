import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import HomePage from './compnents/home/HomePage';
import {BrowserRouter  , Routes,Route}from 'react-router-dom'
import Navbar from './compnents/Navbar';
import Footer from './compnents/Footer';
import AboutPage from './compnents/about/AboutPage.js'
import ProductPage from './compnents/products/ProductsPage'
import SupportPage from './compnents/support/SupportPage'
import PricingPage from './compnents/pricing/PricingPage'
import Signup from './compnents/signup/Signup'
import Login from './compnents/signup/Login.js'
import NotFound from './compnents/NotFound'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
