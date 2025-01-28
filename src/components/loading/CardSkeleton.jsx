const CardSkeleton = () => {
  return (
    <div className={`w-full border-2 shadow-inner rounded-lg animate-pulse`}>
      <div className="h-5/6 ">
        <div className="bg-gray-300 w-full aspect-square"></div>
      </div>
      <div className="px-4 h-1/6 space-y-2">
        <div className="flex justify-between items-center">
          <div className="bg-gray-300 h-4 w-1/4"></div>
          <div className="bg-gray-300 h-6 w-1/5"></div>
        </div>
        <div className="bg-gray-300 h-4 w-3/4"></div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <div className="bg-gray-300 h-4 w-4"></div>
            <div className="bg-gray-300 h-4 w-6"></div>
          </div>
          <div className="bg-gray-300 h-4 w-8"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
