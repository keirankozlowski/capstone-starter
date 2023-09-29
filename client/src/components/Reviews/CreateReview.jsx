import { useState, useEffect } from "react";
import { addReview, fetchAllReviews } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";

export default function CreateReview({ setReviews, museumId, token }) {
  const [newReview, setNewReview] = useState({ rating: "", body: "" });
  const [rating, setRating] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const userId = 5;

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    async function createReview() {
      //   console.log("my user id:", myUserId);
      const result = await addReview(
        userId,
        museumId,
        rating,
        body,
        new Date().toISOString(),
        token
      );

      const updateReview = await fetchAllReviews();
      setReviews(updateReview.reviews);
      navigate("./", { replace: true });

      return result;
    }
    createReview();

    setRating("");
    setBody("");
  };

  return (
    <>
      <h3>Add a review</h3>
      <form onSubmit={submitHandler}>
        <input
          placeholder="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <br />
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
