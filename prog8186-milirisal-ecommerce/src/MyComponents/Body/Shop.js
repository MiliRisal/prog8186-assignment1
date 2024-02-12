import React from "react";
import { ProductList } from "../../Products";
import ProductDetail from "./ProductDetail";
import "./shop.css";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {ProductList.map((product) => (
          <ProductDetail data={product} />
        ))}
      </div>
    </div>
  );
};
