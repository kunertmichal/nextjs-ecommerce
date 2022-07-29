import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../components/Button";
import { CheckoutFields } from "../components/CheckoutFields";
import { CheckoutSummary } from "../components/CheckoutSummary";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("This field is required"),
    cardOwner: yup.string().required("This field is required"),
    cardNumber: yup
      .number()
      .required("This field is required")
      .typeError("Invalid card number"),
    cardExpirationDate: yup.string().required("This field is required"),
    cardCvc: yup
      .number()
      .required("This field is required")
      .typeError("Invalid CVC code"),
    company: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
    addressContinuation: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    stateProvince: yup.string().required("This field is required"),
    postalCode: yup.string().required("This field is required"),
  })
  .required();

export type CheckoutFormData = yup.InferType<typeof schema>;

const CheckoutPage = () => {
  const methods = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <form
      className="py-16 block md:grid grid-cols-3 gap-8 max-w-4xl mx-auto"
      onSubmit={methods.handleSubmit((data) => console.log(data))}
    >
      <div className="col-span-2">
        <CheckoutFields methods={methods} />
      </div>
      <div>
        <CheckoutSummary />
        <Button size="full" type="submit" className="mt-4">
          Place order
        </Button>
      </div>
    </form>
  );
};

export default CheckoutPage;
