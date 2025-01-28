const Payment = ({ subTotal, shippingFee, finalPrice, checkout }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">Cart Total</h4>
      <div className="bg-primary  rounded-lg p-4  text-white">
        <h4 className="font-bold flex justify-between">
          Cart Total: <span>{subTotal.toFixed(2)}</span>
        </h4>
        <h4 className="font-semibold flex justify-between">
          Shipping : <span>{shippingFee}</span>
        </h4>
        <h4 className="font-bold flex justify-between">
          Final Price : <span> {finalPrice}</span>
        </h4>
      </div>
      <button
        onClick={checkout}
        className="bg-green-400 w-full py-2 text-xl rounded-lg font-semibold text-white"
      >
        CheckOut
      </button>
    </div>
  );
};

export default Payment;
