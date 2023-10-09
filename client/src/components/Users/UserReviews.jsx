import React, { useState, useEffect } from "react";
import { fetchReviewsByUserId } from "../../helpers/fetching";
import StarRating from "../Reviews/StarRating";
import EditReview from "../Reviews/EditReview";
import { deleteReview } from "../../helpers/fetching";

export default function UserReviews({ userId, token }) {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUserReviews() {
      if (userId === null) {
        setReviews([]);
        return;
      }
      try {
        const userReviews = await fetchReviewsByUserId(userId);
        console.log("User Reviews Response: ", userReviews);
        setReviews(userReviews || []);
      } catch (error) {
        console.error("Error fetching reviews for museum:", error);
        setError(error);
      }
    }

    getUserReviews();
  }, []);

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

  const updateReview = (editedReview) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.reviewId === editedReview.reviewId
          ? { ...review, ...editedReview }
          : review
      )
    );
  };
  return (
    <>
      <div className="user-reviews-container">
        <h1>My Reviews</h1>
        {reviews.length === 0 ? (
          <p>No reviews available</p>
        ) : (
          reviews.map((review) => (
            <div key={review.reviewId} className="user-review-card">
              <StarRating
                rating={review.rating}
                onRatingChange={() => {}}
                disableHover={true}
              />
              <p>{review.body}</p>
              <p>{review.date}</p>
              <div>
                <p>{review.username}</p>
              </div>

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
            onUpdateReview={updateReview}
          />
        )}
      </div>
    </>
  );
}