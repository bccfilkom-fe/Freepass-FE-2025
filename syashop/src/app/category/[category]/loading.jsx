import CardSkeleton from "@/components/loading/CardSkeleton";

const loading = () => {
  return (
    <div className="lg:grid-cols-3 gap-8 grid grid-cols-1 md:mt-6 mt-28">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default loading;
