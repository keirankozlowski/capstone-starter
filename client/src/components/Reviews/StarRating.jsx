import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  const stars = [];

for (let i = 1; i <= 5; i++) {
    let starIcon;
    if (i <= rating) {
      starIcon = <FontAwesomeIcon icon={solidStar} />;
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      starIcon = <FontAwesomeIcon icon={faStarHalfStroke} />;
    } else {
      starIcon = <FontAwesomeIcon icon={regularStar} />;
    }
    stars.push(starIcon);
  }

  return <>{stars}</>;
};

export default StarRating;
