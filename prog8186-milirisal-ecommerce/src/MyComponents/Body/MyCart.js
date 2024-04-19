import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./MyCart.css";

function MyCart() {
  const { cartItems, getTotalCartAmount, checkout, products } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {products.map((product) => {
          const cartItemCount = cartItems[product.id] || 0;
          if (cartItemCount > 0) {
            return (
              <CartItem
                key={product.id}
                data={product}
                quantity={cartItemCount}
              />
            );
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Finalize Sale{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default MyCart;
