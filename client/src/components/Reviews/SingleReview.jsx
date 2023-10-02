import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchReviewsByMuseumId } from "../../helpers/fetching";
import { deleteReview } from "../../helpers/fetching";
import EditReview from "./EditReview";
import StarRating from "./StarRating";

export default function SingleReview({ museumId, token, userId }) {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

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

  const handleEditReview = (review) => {
    setSelectedReview(review);
  };

  const handleCancelEdit = () => {
    setSelectedReview(null);
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const result = await deleteReview(reviewId, token);
      console.log("reviewId: ", reviewId);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.reviewId !== reviewId)
      );
      navigate("./", { replace: true });
      return result;
    } catch (error) {
      console.error(error);
    }
  };

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
            {token && userId === review.userId && (
              <div>
                <button onClick={() => handleEditReview(review)}>
                  Edit Review
                </button>
                <button
                  onClick={() => handleDeleteReview(review.reviewId, token)}
                >
                  Delete Review
                </button>
              </div>
            )}
          </div>
        ))
      )}
      {selectedReview && (
        <EditReview
          reviewId={selectedReview.reviewId}
          onCancel={handleCancelEdit}
          token={token}
          userId={userId}
          museumId={selectedReview.museumId}
        />
      )}
    </>
  );
}
