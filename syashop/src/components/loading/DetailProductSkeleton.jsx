const DetailProductSkeleton = () => {
  return (
    <div>
      <div className=" lg:w-full mx-auto animate-pulse">
        <h4 className="bg-gray-300 h-6 rounded-md mb-5"></h4>
        <div className="flex flex-col lg:flex-row lg:gap-x-24">
          <div className="flex justify-center bg-gray-300 border-4 aspect-square h-80 lg:h-64 rounded-2xl w-full lg:w-[50%]"></div>
          <div className="lg:w-full mt-4 lg:mt-0">
            <div className="flex justify-between items-center mb-4 lg:my-1">
              <div className="bg-gray-300 h-6 w-24 rounded-md"></div>
              <span className="flex gap-4">
                <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
                <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
              </span>
            </div>
            <div className="bg-gray-300 h-6 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-6 w-3/4 rounded-md mb-2"></div>
            <div className="flex justify-between lg:flex-col">
              <div>
                <span className="flex gap-2 items-center mb-2">
                  <div className="bg-gray-300 h-4 w-8 rounded-md"></div>
                  <div className="bg-gray-300 h-4 w-8 rounded-md"></div>
                  <div className="bg-gray-300 h-4 w-12 rounded-md"></div>
                </span>
                <div className="bg-gray-300 h-4 w-24 rounded-md mb-2"></div>
              </div>
              <div className="bg-gray-300 h-8 w-20 rounded-md"></div>
            </div>
          </div>
        </div>
        <p className="bg-gray-300 h-24 rounded-md mt-10"></p>
      </div>
    </div>
  );
};

export default DetailProductSkeleton;
