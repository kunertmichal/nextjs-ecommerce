import Image from "next/image";
import { Cart } from "../components/Cart";

const CartPage = () => {
  return (
    <div className="py-16">
      <h1 className="mb-16 text-4xl font-bold text-gray-800">Your cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
