export const CheckoutSummary = () => {
  return (
    <div className="flex flex-col space-y-4">
      <p className="text-xl font-semibold mb-8">Summary</p>
      <hr />
      <div className="flex">
        <span>Subtotal</span>
        <span className="ml-auto">$320</span>
      </div>
      <div className="flex">
        <span>Shipping</span>
        <span className="ml-auto">$15</span>
      </div>
      <div className="flex">
        <span>Taxes</span>
        <span className="ml-auto">$25</span>
      </div>
      <hr />
      <div className="flex">
        <span className="text-lg font-semibold">Total</span>
        <span className="ml-auto">$360</span>
      </div>
    </div>
  );
};
