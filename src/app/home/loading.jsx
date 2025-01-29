import CategoryListSkeleton from "@/components/loading/CategoryListSkeleton";
import HeroSkeleton from "@/components/loading/HeroSkeleton";
import HighlightProductSkeleton from "@/components/loading/HighlightProductSkeleton";

const loading = () => {
  return (
    <div className="w-full h-full bg-white">
      <HeroSkeleton />
      <CategoryListSkeleton />
      <HighlightProductSkeleton />
    </div>
  );
};

export default loading;
