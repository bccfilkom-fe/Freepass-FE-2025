import React from "react";

const PaymentSkeleton = () => {
  return (
    <div>
      <div className="">
        <h4 className="text-xl font-bold">Cart Total</h4>
        <div className="bg-gray-300 rounded-lg p-4 mt-14 text-white animate-pulse">
          <h4 className="font-bold flex justify-between">
            <span className="bg-gray-400 h-6 w-1/3 rounded"></span>
            <span className="bg-gray-400 h-6 w-1/4 rounded"></span>
          </h4>
          <h4 className="font-semibold flex justify-between mt-4">
            <span className="bg-gray-400 h-6 w-1/3 rounded"></span>
            <span className="bg-gray-400 h-6 w-1/4 rounded"></span>
          </h4>
          <h4 className="font-bold flex justify-between mt-4">
            <span className="bg-gray-400 h-6 w-1/3 rounded"></span>
            <span className="bg-gray-400 h-6 w-1/4 rounded"></span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PaymentSkeleton;
