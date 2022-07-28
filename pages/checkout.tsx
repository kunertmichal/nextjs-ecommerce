import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../components/Button";
import { CheckoutFields } from "../components/CheckoutFields";
import { CheckoutSummary } from "../components/CheckoutSummary";

const schema = yup
  .object({
    email: yup.string().required().email(),
    cardOwner: yup.string().required(),
    cardNumber: yup.string().required(),
    cardExpirationDate: yup.string().required(),
    cardCvc: yup.string().required(),
    company: yup.string().required(),
    address: yup.string().required(),
    addressContinuation: yup.string().required(),
    city: yup.string().required(),
    stateProvince: yup.string().required(),
    postalCode: yup.string().required(),
  })
  .required();

type CheckoutFormData = yup.InferType<typeof schema>;

const CheckoutPage = () => {
  const { register, setValue, handleSubmit, formState } =
    useForm<CheckoutFormData>({
      resolver: yupResolver(schema),
    });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      className="py-16 block md:grid grid-cols-3 gap-8 max-w-4xl mx-auto"
      onSubmit={onSubmit}
    >
      <div className="col-span-2">
        <CheckoutFields register={register} />
      </div>
      <div>
        <CheckoutSummary />
        <Button size="full" type="submit" className="mt-8">
          Place order
        </Button>
      </div>
    </form>
  );
};

export default CheckoutPage;
