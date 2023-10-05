import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating, onRatingChange, disableHover }) => {
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
    if (!disableHover) {
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
      } else if (
        i === Math.ceil(hoverRating) &&
        !Number.isInteger(hoverRating)
      ) {
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
    } else {
      starIcon = (
        <FontAwesomeIcon
          icon={i <= rating ? solidStar : regularStar}
          key={`star${i}`}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    stars.push(starIcon);
  }

  return (
    <>
      <div className="star-rating">{stars}</div>
    </>
  );
};

export default StarRating;
