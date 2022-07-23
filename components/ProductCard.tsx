import React from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useCartState } from "../hooks/useCartState";
import { Button } from "./Button";

interface Props {
  data: {
    id: string;
    image: string;
    name: string;
    price: number;
  };
}

export const ProductCard = ({ data }: Props) => {
  const { addItemToCart } = useCartState();

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    addItemToCart({
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      quantity: 1,
    });

    toast.success("Product has been added to cart", {
      className: "hidden",
      position: "bottom-center",
    });
  }

  return (
    <div className="border border-gray-200 rounded-lg p-8">
      <div>
        <Image
          src={data.image}
          alt={data.name}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
        />
      </div>

      <div className="mt-2 space-y-3">
        <p className="text-xs text-gray-500">Space Grey</p>
        <div className="flex space-x-1">
          <button type="button">
            <span className="sr-only"> Space Grey </span>
            <span className="block rounded-full w-4 h-4 bg-[#595759]"> </span>
          </button>
          <button type="button">
            <span className="sr-only"> Silver </span>
            <span className="block rounded-full w-4 h-4 bg-[#d2d3d4]"> </span>
          </button>
          <button type="button">
            <span className="sr-only"> Pink </span>
            <span className="block rounded-full w-4 h-4 bg-[#d89f97]"></span>
          </button>
          <button type="button">
            <span className="sr-only"> Green </span>
            <span className="block rounded-full w-4 h-4 bg-[#afbfab]"> </span>
          </button>
          <button type="button">
            <span className="sr-only"> Sky Blue </span>
            <span className="block rounded-full w-4 h-4 bg-[#91a5bb]"> </span>
          </button>
        </div>
        <div className="flex justify-between text-xs">
          <p> Small Headphones </p>
          <p> $299 </p>
        </div>
        <Button
          variant="tertiary"
          size="full"
          onClick={(e) => handleAddToCart(e)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
