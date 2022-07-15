import React, { createContext, ReactNode } from "react";
import {
  CartState,
  CartItem,
  getItemsFromStorage,
  setItemsInStorage,
} from "../repositories/cart";

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = React.useState<CartItem[] | undefined>(
    undefined
  );

  React.useEffect(() => {
    setCartItems(getItemsFromStorage());
  }, []);

  React.useEffect(() => {
    if (cartItems === undefined) {
      return;
    }

    setItemsInStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems || [],
        addItemToCart: (newItem) => {
          setCartItems((prevState = []) => {
            const found = cartItems?.find(
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
            return prevState?.filter((item) => item.id !== id);
          });
        },
        increaseProductQuantity: (id) => {
          setCartItems((prevState) => {
            return prevState?.map((item) => {
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
          setCartItems((prevState = []) => {
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
