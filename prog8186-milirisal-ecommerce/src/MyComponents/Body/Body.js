import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import MyCart from "./MyCart";
import Home from "./Home";
import { MyAccount } from "./MyAccount";

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
