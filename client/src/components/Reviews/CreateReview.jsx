import { useState, useEffect } from "react";
import { addReview, fetchAllReviews, fetchReviewsByMuseumId } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export default function CreateReview({ setReviews, museumId, token, userId }) {
  const [newReview, setNewReview] = useState({ rating: 0, body: "" });
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setNewReview({ ...newReview, rating: newRating });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    async function createReview() {
      const result = await addReview(
        userId,
        museumId,
        rating,
        body,
        new Date().toISOString(),
        token
      );

      const updateReview = await fetchReviewsByMuseumId(museumId);
      setReviews(updateReview);
      console.log("new reviews", updateReview);
      navigate("./", { replace: true });

      return result;
    }
    createReview();

    setRating(0);
    setBody("");
  };

  return (
    <>
      <h3>Add a review</h3>
      Rating: <StarRating rating={rating} onRatingChange={handleRatingChange} />
      <form onSubmit={submitHandler}>
        <input
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />

        <button type="submit">Create Review</button>
      </form>
    </>
  );
}
