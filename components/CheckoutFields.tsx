import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<{
    email: string;
    cardOwner: string;
    cardNumber: string;
    cardExpirationDate: string;
    cardCvc: string;
    company: string;
    address: string;
    addressContinuation: string;
    city: string;
    stateProvince: string;
    postalCode: string;
  }>;
}

export const CheckoutFields = ({ register }: Props) => {
  return (
    <div>
      <p className="text-xl font-semibold mb-8">Contact informaction</p>
      <label className="uppercase font-bold text-xs mb-6 block">
        Email address
        <input
          type="email"
          autoComplete="email"
          {...register("email", { required: true })}
          className="block w-full border-gray-300 rounded"
        />
      </label>
      <p className="text-xl font-semibold my-8">Payment details</p>
      <label className="uppercase font-bold text-xs mb-6 block">
        Name on card
        <input
          type="text"
          autoComplete="cc-name"
          {...register("cardOwner")}
          className="block w-full border-gray-300 rounded"
        />
      </label>
      <label className="uppercase font-bold text-xs mb-6 block">
        Card number
        <input
          type="text"
          autoComplete="cc-number"
          {...register("cardNumber")}
          className="block w-full border-gray-300 rounded"
        />
      </label>
      <div className="block sm:grid grid-cols-3 gap-8">
        <label className="uppercase font-bold text-xs mb-6 block col-span-2">
          Expiration date (MM/YY)
          <input
            type="text"
            autoComplete="cc-exp"
            {...register("cardExpirationDate")}
            className="block w-full border-gray-300 rounded"
          />
        </label>
        <label className="uppercase font-bold text-xs mb-6 block">
          CVC
          <input
            type="text"
            autoComplete="cc-csc"
            {...register("cardCvc")}
            className="block w-full border-gray-300 rounded"
          />
        </label>
      </div>
      <p className="text-xl font-semibold my-8">Shipping address</p>
      <label className="uppercase font-bold text-xs mb-6 block">
        Company
        <input
          type="text"
          {...register("company")}
          className="block w-full border-gray-300 rounded"
        />
      </label>
      <label className="uppercase font-bold text-xs mb-6 block">
        Address
        <input
          type="text"
          {...register("address")}
          className="block w-full border-gray-300 rounded"
        />
      </label>
      <label className="uppercase font-bold text-xs mb-6 block">
        Apartment, suite, etc.
        <input
          type="text"
          className="block w-full border-gray-300 rounded"
          {...register("addressContinuation")}
        />
      </label>
      <div className="block sm:grid grid-cols-3 gap-8">
        <label className="uppercase font-bold text-xs mb-6 block">
          City
          <input
            type="text"
            className="block w-full border-gray-300 rounded"
            {...register("city")}
          />
        </label>
        <label className="uppercase font-bold text-xs mb-6 block">
          State / Province
          <input
            type="text"
            className="block w-full border-gray-300 rounded"
            {...register("stateProvince")}
          />
        </label>
        <label className="uppercase font-bold text-xs mb-6 block">
          Postal code
          <input
            type="text"
            className="block w-full border-gray-300 rounded"
            {...register("postalCode")}
          />
        </label>
      </div>
    </div>
  );
};
