const CategoryListSkeleton = () => {
  return (
    <section className="mt-10 lg:flex justify-between lg:h-24 items-center">
      <div className="h-full">
        <div className="bg-slate-300 h-8 w-1/2 rounded animate-pulse"></div>
      </div>
      <ul className="grid h-full mt-4 lg:mt-0 grid-cols-2 gap-x-4 lg:gap-x-10 gap-y-4">
        <li className="border-2 border-slate-300 rounded-lg shadow-sm p-2 flex gap-2 items-center animate-pulse">
          <div className="bg-slate-300 h-8 w-8 rounded-full"></div>
          <div className="bg-slate-300 h-6 w-20 rounded"></div>
        </li>
        <li className="border-2 border-slate-300 rounded-lg shadow-sm p-2 flex gap-2 items-center animate-pulse">
          <div className="bg-slate-300 h-8 w-8 rounded-full"></div>
          <div className="bg-slate-300 h-6 w-20 rounded"></div>
        </li>
        <li className="border-2 border-slate-300 rounded-lg shadow-sm p-2 flex gap-2 items-center animate-pulse">
          <div className="bg-slate-300 h-8 w-8 rounded-full"></div>
          <div className="bg-slate-300 h-6 w-20 rounded"></div>
        </li>
        <li className="border-2 border-slate-300 rounded-lg shadow-sm p-2 flex gap-2 items-center animate-pulse">
          <div className="bg-slate-300 h-8 w-8 rounded-full"></div>
          <div className="bg-slate-300 h-6 w-20 rounded"></div>
        </li>
      </ul>
    </section>
  );
};

export default CategoryListSkeleton;
