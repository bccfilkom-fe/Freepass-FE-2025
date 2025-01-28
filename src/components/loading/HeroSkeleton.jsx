const HeroSkeleton = () => {
  return (
    <section className="mt-4relative text-5xl p-4 lg:text-[4rem] font-semibold text-white bg-slate-300 w-full h-96 rounded-lg animate-pulse">
      <div className="absolute lg:top-24 top-14 space-y-4">
        <div className="bg-slate-300 h-10 w-3/4 rounded"></div>
        <div className="bg-slate-300 h-10 w-3/4 rounded"></div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
