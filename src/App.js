
import './App.css';
// import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import MainCart from './pages/MainCart';



const App = () => {

  return (
    <>


      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainCart" element={<MainCart />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productDetail" element={<ProductDetail />} />
        </Routes>

      </BrowserRouter>
    </>


  );
}

export default App;
