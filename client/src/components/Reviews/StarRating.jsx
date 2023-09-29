import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (clickedRating) => {
    onRatingChange(clickedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let starIcon;
    if (i <= (hoverRating || rating)) {
      starIcon = (
        <FontAwesomeIcon
          icon={solidStar}
          key={`solidStar${i}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => handleStarHover(0)}
        />
      );
    } else if (i === Math.ceil(hoverRating) && !Number.isInteger(hoverRating)) {
      starIcon = (
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          key={`halfStar${i}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => handleStarHover(0)}
        />
      );
    } else {
      starIcon = (
        <FontAwesomeIcon
          icon={regularStar}
          key={`regStar${i}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => handleStarHover(0)}
        />
      );
    }
    stars.push(starIcon);
  }

  return <>{stars}</>;
};

export default StarRating;
