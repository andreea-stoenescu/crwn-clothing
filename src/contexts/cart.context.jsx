import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cart items contains the product to add

  //if it does, increase the quantity by 1

  //if it doesn't, add the product to the cart items array
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen
  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}