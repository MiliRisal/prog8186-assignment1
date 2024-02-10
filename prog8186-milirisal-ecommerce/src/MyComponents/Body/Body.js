import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import MyAccount from "./MyAccount";
import MyCart from "./MyCart";

function Body() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" element={<ProductDetail />} />
      <Route path="/myCart" element={<MyCart />} />
      <Route path="/myAccount" element={<MyAccount />} />
    </Routes>
  );
}

export default Body;
