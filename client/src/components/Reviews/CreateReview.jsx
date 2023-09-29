import { useState, useEffect } from "react";
import { addReview, fetchAllReviews } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../Redux/authSlice";
import { useSelector } from "react-redux";
import { fetchUserByUsername } from "../../helpers/fetching";

export default function CreateReview({ setReviews, museumId, token }) {
  const [myUserId, setMyUserId] = useState(7);
  const [rating, setRating] = useState("");
  const [body, setBody] = useState("");

  const singleMuseumId = museumId;

  const navigate = useNavigate();
  //   const user = useSelector(selectCurrentUser);
  //   console.log("user: ", user);
  //   //   console.log("token", token);

  //   useEffect(() => {
  //     // Fetch the userId when the component mounts
  //     async function fetchUserId() {
  //       try {
  //         const response = await fetchUserByUsername(user);
  //         console.log("userid?: ", response.userId);
  //         setMyUserId(response.userId);
  //       } catch (error) {
  //         console.error("Error fetching user info", error);
  //       }
  //     }
  //     fetchUserId();
  //   }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    async function createReview() {
      const newReview = {
        myUserId,
        singleMuseumId,
        rating,
        body,
      };
      const result = await addReview(newReview, token);
      console.log("my user id:", myUserId);
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
          placeholder="userId"
          value={7}
          onChange={(e) => setMyUserId(e.target.value)}
        />
        <input placeholder="Museum Id" value={singleMuseumId} disabled />
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
