import React, { createContext, ReactNode, useContext } from "react";

interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly image: string;
  readonly quantity: number;
}

interface CartState {
  readonly items: CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
  increaseProductQuantity: (id: CartItem["id"]) => void;
  decreaseProductQuantity: (id: CartItem["id"]) => void;
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
        addItemToCart: (newItem) => {
          setCartItems((prevState) => {
            const found = cartItems.find(
              (existingItem) => existingItem.id === newItem.id
            );

            if (!found) {
              return [...prevState, newItem];
            }

            return prevState.map((existingItem) => {
              if (existingItem.id === newItem.id) {
                return {
                  ...existingItem,
                  quantity: existingItem.quantity + newItem.quantity,
                };
              }

              return existingItem;
            });
          });
        },
        removeItemFromCart: (id) => {
          if (!id) return;

          setCartItems((prevState) => {
            return prevState.filter((item) => item.id !== id);
          });
        },
        increaseProductQuantity: (id) => {
          setCartItems((prevState) => {
            return prevState.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }

              return item;
            });
          });
        },
        decreaseProductQuantity: (id) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((item) => item.id === id);

            if (existingItem && existingItem.quantity === 1) {
              return prevState.filter((item) => item.id !== id);
            }

            return prevState.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }

              return item;
            });
          });
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