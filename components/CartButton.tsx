import React from "react";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { useCartState } from "../context/cartContext";
import { Button } from "./Button";

export const CartButton = () => {
  const cartState = useCartState();

  return (
    <Link href="/cart" passHref>
      <a>
        <Button
          icon
          size={cartState.items.length ? "md" : "square"}
          className="md:ml-auto mr-3"
        >
          <MdShoppingCart />
          {cartState.items.length > 0 && (
            <span className="bg-white h-5 w-5 text-black text-xs font-semibold rounded-full ml-2 flex items-center justify-center">
              {cartState.items.length}
            </span>
          )}
        </Button>
      </a>
    </Link>
  );
};
