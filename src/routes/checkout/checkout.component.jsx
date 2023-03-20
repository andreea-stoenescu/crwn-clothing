import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <h1>this shows the list of products in the basket</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, price, quantity } = cartItem;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <span>{quantity}</span>
              <span>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
