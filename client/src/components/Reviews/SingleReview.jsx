import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchReviewsByMuseumId } from "../../helpers/fetching";
import StarRating from "./StarRating";

export default function SingleReview({ museumId, token }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // FETCH REVIEWS BY MUSEUMID
  useEffect(() => {
    async function getMuseumReviews() {
      if (museumId === null) {
        setReviews([]);
        return;
      }

      try {
        const museumReviews = await fetchReviewsByMuseumId(museumId);
        console.log("Museum Reviews: ", museumReviews);
        setReviews(museumReviews || []);
      } catch (error) {
        console.error("Error fetching reviews for museum:", error);
      }
    }
    getMuseumReviews();
  }, [museumId]);

  return (
    <>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews.map((review) => (
          <div key={review.reviewId}>
          <StarRating rating={review.rating} /> 
            <p>{review.body}</p>
            <p>{review.date}</p>
          </div>
        ))
      )}
    </>
  );
}
