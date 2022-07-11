import React, { createContext, ReactNode, useContext } from "react";

interface CartItem {
  id: number;
  price: number;
  title: string;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems([...cartItems, item]);
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);

  if (!cartState) {
    throw new Error("You forgot to use CartStateContextProvider!");
  }

  return cartState;
};
