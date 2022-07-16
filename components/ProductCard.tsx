import React from "react";
import Image from "next/image";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useCartState } from "../hooks/useCartState";
import { Button } from "./Button";

interface Props {
  data: {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export const ProductCard = ({ data }: Props) => {
  const [quantity, setQuantity] = React.useState(1);
  const { addItemToCart } = useCartState();

  function increaseQuantity(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setQuantity((q) => q + 1);
  }

  function decreaseQuantity(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    if (quantity === 1) return;

    setQuantity((q) => q - 1);
  }

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    addItemToCart({
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      quantity,
    });
  }

  return (
    <div className="border border-gray-200 rounded-lg p-8">
      <div>
        <Image
          src={data.image}
          alt={data.title}
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
      </div>

      {/* <h2 className="text-xl font-semibold mt-8">{data.title}</h2>
      <p className="text-gray-400">{data.category}</p>
      <div className="flex w-full justify-center my-6">
        <p className="font-bold text-lg">{data.price * quantity}$</p>
        <div className="flex items-center ml-4">
          <button onClick={(e) => decreaseQuantity(e)}>
            <MdRemoveCircleOutline className="text-2xl" />
          </button>
          <span className="mx-2 text-lg">{quantity}</span>
          <button onClick={(e) => increaseQuantity(e)}>
            <MdAddCircleOutline className="text-2xl" />
          </button>
        </div>
      </div>
      <Button onClick={(e) => handleAddToCart(e)}>Add to cart</Button> */}
    </div>
  );
};
