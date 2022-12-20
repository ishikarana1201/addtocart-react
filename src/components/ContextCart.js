import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="../images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="../images/cart.png" alt="cart" className="arrow-icon" />
            <p>0</p>
          </div>
        </header>
        <section className="main-class-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">0</span> items in the
            cart.
          </p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="../images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="../images/cart.png" alt="cart" className="arrow-icon" />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-class-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">{totalItem}</span>{" "}
            items in the cart.
          </p>
          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {item.map((currItem) => {
                  return <Items key={currItem.id} {...currItem} />;
                })}
              </Scrollbars>
            </div>
          </div>
          <div className="card-total">
            <h3>
              Cart Total : <span>{totalAmount} rs</span>
            </h3>
            <button>Checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </section>
      </>
    );
  }
};

export default ContextCart;
