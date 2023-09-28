import React, { useState, useEffect } from "react";
import { editReview, fetchSingleReview } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";

export default function EditReview({ reviewId, onCancel, token }) {
  const [newRating, setNewRating] = useState("");
  const [newBody, setNewBody] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log("EditReview Token: ", token);

  useEffect(() => {
    async function fetchReviewData() {
      try {
        const review = await fetchSingleReview(reviewId);
        setNewRating(review.rating);
        setNewBody(review.body);
      } catch (error) {
        setError("Failed to fetch review data. Please try again later.");
      }
    }
    fetchReviewData();
  }, [reviewId]);

  const handleEditReview = async (event) => {
    try {
      event.preventDefault();
      const editedReview = await editReview(
        reviewId,
        newRating,
        newBody,
        token
      );
      navigate("./", { replace: true });
      if (editedReview) {
        onCancel();
      } else {
        console.error("Failed to update review.");
      }
    } catch (error) {
      console.error("Error updating review", error);
    }
  };

  return (
    <div>
      <h2>Edit Review</h2>
      {error && <p className="error">{error}</p>}
      <br />
      <form onSubmit={handleEditReview}>
        <label>Rating: </label>
        <input
          type="number"
          name="newRating"
          id="newRating"
          value={newRating}
          onChange={(event) => setNewRating(event.target.value)}
        />

        <label>Review Text: </label>
        <input
          type="text"
          name="newBody"
          id="newBody"
          value={newBody}
          onChange={(event) => setNewBody(event.target.value)}
        />
        <button type="submit">Update</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
