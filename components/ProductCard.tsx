import React from "react";
import Image from "next/image";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useCartState } from "../context/cartContext";
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
    <div className="border border-gray-200 rounded-lg p-8 text-center">
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
      <h2 className="text-xl font-semibold mt-8">{data.title}</h2>
      <p className="text-gray-400">{data.category}</p>
      <div className="flex w-full justify-center my-6">
        <p className="font-bold text-lg">{data.price}$</p>
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
      <Button onClick={(e) => handleAddToCart(e)}>Add to cart</Button>
    </div>
  );
};
