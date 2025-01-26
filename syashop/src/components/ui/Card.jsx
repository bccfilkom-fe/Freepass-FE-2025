import StarRating from "./StarRating";

const Card = ({ img, title, category, price, count, rating, classname }) => {
  return (
    <div
      className={`${classname} w-full hover:scale-105 transition-all hover:bg-sl border-2 shadow-inner rounded-lg pb-10 `}
    >
      <div className="h-5/6 p-10 ">
        <img className="w-fit aspect-square" src={img} alt="" />
      </div>
      <div className=" px-4  h-1/6">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-light">{category}</h4>
          <h4 className="text-lg text-primary">${price}</h4>
        </div>
        <div>
          <h4 className="text-sm truncate">{title}</h4>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex gap-2 ">
            <StarRating rating={rating} className="w-4 h-4" />
            <h4 className="text-xs font-semibold">{rating}</h4>
          </div>
          <h4 className="text-xs font-semibold">{count} sold</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
