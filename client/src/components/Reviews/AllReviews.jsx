import React, { useState, useEffect } from "react";
import { fetchAllReviews, addReview, editReview } from "../../helpers/fetching";
import EditReview from "./EditReview";

export default function AllReviews({ token }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const [selectedReview, setSelectedReview] = useState(null);

  // FETCH ALL REVIEWS
  useEffect(() => {
    const renderReviews = async () => {
      try {
        const reviewArray = await fetchAllReviews();
        console.log("Review Array: ", reviewArray);
        setReviews(reviewArray);
        return reviewArray;
      } catch (error) {
        setError("Failed to fetch reviews. Please try again later.");
      }
    };
    renderReviews();
  }, []);

  // const handleEditReview = (review) => {
  //   setSelectedReview(review);
  // };

  // const handleCancelEdit = () => {
  //   setSelectedReview(null);
  // };

  return (
    <>
      <h1> Get All Reviews</h1>
      {reviews.map((review) => (
        <div key={review.reviewId}>
          <p>Rating: {review.rating}</p>
          <p>{review.body}</p>
          <p>{review.date}</p>
          {/* <button onClick={() => handleEditReview(review)}>Edit Review</button> */}
        </div>
      ))}

      {/* {selectedReview && (
        <EditReview
          reviewId={selectedReview.reviewId}
          onCancel={handleCancelEdit}
          token={token}
        />
      )} */}
    </>
  );
}
