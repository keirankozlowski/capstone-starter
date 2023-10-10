import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

export default function AverageRating({ reviews }) {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (reviews && reviews.length) {
      const totalRating = reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      setAverageRating(totalRating / reviews.length);
    } else {
      setAverageRating(0);
    }
  }, [reviews]);

  return (
    <div className="averageRating">
      {/* <span>Average Rating:</span> */}
      <span className="average-number">{averageRating.toFixed(1)}</span>
      <div className="rating-container">
        <StarRating
          rating={averageRating}
          onRatingChange={() => {}}
          disableHover={true}
        />
      </div>
    </div>
  );
}
