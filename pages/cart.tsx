import Image from "next/image";
import { MdAdd, MdDeleteOutline, MdRemove } from "react-icons/md";
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
            <th></th>
          </tr>
          {cartState.items.map((product) => (
            <tr key={product.title}>
              <td>
                <div className="flex items-center py-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fixed"
                    objectFit="contain"
                    width="64px"
                    height="64px"
                    max-width="40px"
                  />
                  <div className="ml-2">{product.title}</div>
                </div>
              </td>
              <td className="text-right">
                <div className="flex justify-end">
                  <button
                    className="w-6 h-6 border border-gray-400 flex items-center justify-center"
                    onClick={() =>
                      cartState.decreaseProductQuantity(product.id)
                    }
                  >
                    <MdRemove />
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    className="w-6 h-6 border border-gray-400 flex items-center justify-center"
                    onClick={() =>
                      cartState.increaseProductQuantity(product.id)
                    }
                  >
                    <MdAdd />
                  </button>
                </div>
              </td>
              <td className="text-right">{product.price * product.quantity}</td>
              <td className="text-red-600 text-lg w-24">
                <div className="flex items-center justify-end">
                  <button
                    className="flex"
                    onClick={() => cartState.removeItemFromCart(product.id)}
                  >
                    <MdDeleteOutline className="text-xl" />
                    <span className="text-sm">Remove</span>
                  </button>
                </div>
              </td>
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
