import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Register1, Register2 } from './components/Register';
import Login from './components/Login';
import Product from './components/Product';
import Products from './components/Products';
import Orders from './components/Orders';
import Users from './components/Users';
import Admin from './components/Admin';
import Order from './components/Order';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <div className="App-Container">
        <BrowserRouter>
        <h1 style={{backgroundColor:"orange"}}>MERN FRONTEND</h1>
        <Link to="/home">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Routes>
          <Route index element={<Product/>}/>
          <Route path="/" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register1/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}>
            <Route index element={<Users/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="orders" element={<Orders/>}/>
          </Route>
        </Routes>
        <h1>This is Footer</h1>
      </BrowserRouter>
      </div>
    </>
  );
};
export default App;
