export interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly image: string;
  readonly quantity: number;
}

export interface CartState {
  readonly items: CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
  readonly increaseProductQuantity: (id: CartItem["id"]) => void;
  readonly decreaseProductQuantity: (id: CartItem["id"]) => void;
}

export function getItemsFromStorage() {
  const itemsFromLocalStorage = localStorage.getItem("MIKEBIKE_SHOPPING_CART");

  if (!itemsFromLocalStorage) return [];

  try {
    return JSON.parse(itemsFromLocalStorage);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function setItemsInStorage(cartItems: CartItem[]) {
  localStorage.setItem("MIKEBIKE_SHOPPING_CART", JSON.stringify(cartItems));
}
