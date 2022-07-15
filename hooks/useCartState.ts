import { useContext } from "react";
import { CartStateContext } from "../context/cartContext";

export const useCartState = () => {
  const cartState = useContext(CartStateContext);

  if (!cartState) {
    throw new Error("You forgot to use CartStateContextProvider!");
  }

  return cartState;
};
