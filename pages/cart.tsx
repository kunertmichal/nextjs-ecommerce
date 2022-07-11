import Image from "next/image";
import { MdAdd, MdRemove } from "react-icons/md";
import { useCartState } from "../context/cartContext";

const CartPage = () => {
  const cartState = useCartState();

  return (
    <div className="py-16">
      <h1 className="mb-16 text-4xl font-bold text-gray-800">Your cart</h1>
      {cartState.items.length ? (
        <table className="w-full">
          <tr>
            <th className="text-left pb-4">Product</th>
            <th className="text-right pb-4">Quantity</th>
            <th className="text-right pb-4">Price</th>
          </tr>
          {cartState.items.map((product) => (
            <tr key={product.title}>
              <td>
                <div className="flex items-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fixed"
                    objectFit="contain"
                    width="40px"
                    height="40px"
                    max-width="40px"
                  />
                  <div className="ml-2">{product.title}</div>
                </div>
              </td>
              <td className="text-right">
                <div className="flex justify-end">
                  <button className="w-6 h-6 border border-gray-400 flex items-center justify-center">
                    <MdAdd />
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button className="w-6 h-6 border border-gray-400 flex items-center justify-center">
                    <MdRemove />
                  </button>
                </div>
              </td>
              <td className="text-right">{product.price * product.quantity}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>No products in the cart.</p>
      )}
    </div>
  );
};

export default CartPage;
