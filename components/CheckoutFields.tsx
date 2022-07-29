import { UseFormReturn } from "react-hook-form";
import { CheckoutFormData } from "../pages/checkout";
import { FormInput } from "./FormInput";

interface Props {
  methods: UseFormReturn<CheckoutFormData>;
}

export const CheckoutFields = ({ methods }: Props) => {
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div>
      <p className="text-xl font-semibold mb-8">Contact informaction</p>
      <FormInput name="email" register={register} error={errors.email?.message}>
        Email
      </FormInput>
      <p className="text-xl font-semibold my-8">Payment details</p>
      <FormInput
        name="cardOwner"
        className="mb-8"
        register={register}
        error={errors.cardOwner?.message}
      >
        Card owner
      </FormInput>
      <FormInput
        name="cardNumber"
        type="number"
        className="mb-8"
        register={register}
        error={errors.cardNumber?.message}
      >
        Card number
      </FormInput>
      <div className="block sm:grid grid-cols-3 gap-8">
        <FormInput
          name="cardExpirationDate"
          register={register}
          className="col-span-2"
          error={errors.cardExpirationDate?.message}
        >
          Expiration date (MM/YY)
        </FormInput>
        <FormInput
          name="cardCvc"
          type="number"
          register={register}
          className="mb-8"
          error={errors.cardCvc?.message}
        >
          CVC
        </FormInput>
      </div>
      <p className="text-xl font-semibold my-8">Shipping address</p>
      <FormInput
        name="company"
        register={register}
        className="mb-8"
        error={errors.company?.message}
      >
        Company
      </FormInput>
      <FormInput
        name="address"
        register={register}
        className="mb-8"
        error={errors.address?.message}
      >
        Address
      </FormInput>
      <FormInput
        name="addressContinuation"
        register={register}
        className="mb-8"
        error={errors.addressContinuation?.message}
      >
        Apartment, suite, etc.
      </FormInput>
      <div className="block sm:grid grid-cols-3 gap-8">
        <FormInput
          name="city"
          register={register}
          className="mb-8"
          error={errors.city?.message}
        >
          City
        </FormInput>
        <FormInput
          name="stateProvince"
          register={register}
          className="mb-8"
          error={errors.stateProvince?.message}
        >
          State or province
        </FormInput>
        <FormInput
          name="postalCode"
          register={register}
          className="mb-8"
          error={errors.postalCode?.message}
        >
          Postal code
        </FormInput>
      </div>
    </div>
  );
};
