import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products.find((p) => p.id === Number(itemId));
        if (product) {
          totalAmount += cartItems[itemId] * product.pricing;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] && prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount >= 0 ? newAmount : 0,
    }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    products,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
