import React, { createContext } from "react";
import "./cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";

// Create context
export const CartContext = createContext();

const Cart = () => {
  return (
    <>
      <CartContext.Provider value={products}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
