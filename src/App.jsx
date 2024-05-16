import React, { useState } from "react";
import Product from "./components/Products/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>}></Route>
        <Route  path="/cartItems" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}


export default App;