import { Star, StarHalf } from "lucide-react";
import React from "react";

const StarRating = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={stars} className="star full">
        <Star fill="yellow" className={`${className} text-yellow-200`} />
      </span>
    );
  }
  if (hasHalfStar) {
    stars.push(
      <span key={stars} className="star half relative">
        <StarHalf fill="yellow" className={`${className} text-yellow-200`} />
        <Star className={`${className} absolute top-0 text-yellow-200`} />
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={stars} className={`${className} "text-yellow-200"`}>
        <Star className={`${className} text-yellow-200`} />
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
