import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;

  for (const product of cart) {
    let price = parseInt(product.price);
    total = total + price;
  }
  return (
    <div>
      <h1>This is Cart</h1>

      <h5>Item Order: {cart.length}</h5>
      <h6>Total: {total}</h6>
    </div>
  );
};

export default Cart;
