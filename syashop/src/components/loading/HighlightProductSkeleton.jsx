const HighlightProductSkeleton = () => {
  return (
    <section className="mt-10 text-2xl font-bold">
      <h2 className=""></h2>
      <section className="w-full h-[33rem] lg:h-[20rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-300 h-full w-full rounded-lg animate-pulse"></div>
        <div className="bg-slate-300 h-full w-full rounded-lg animate-pulse"></div>
        <div className="bg-slate-300 h-full w-full rounded-lg animate-pulse"></div>
        <div className="bg-slate-300 h-full w-full rounded-lg animate-pulse"></div>
      </section>
    </section>
  );
};

export default HighlightProductSkeleton;
