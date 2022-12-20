import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

// Create context
export const CartContext = createContext();

const Cart = () => {
  // Initial State
  const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // Remove all items
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // Clear cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  // Increment product in cart
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // Decrement product in cart
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // Define useEffect to perform quantity operations

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
    // console.log("clik");
  }, [state.item]);

  // Define usReducer
  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
