// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { deleteReview } from "../../helpers/fetching";

// export default function DeleteReview({ reviewId, onDelete }) {
//   const [reviews, setReviews] = useState(null);

//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     try {
//       await onDelete(reviewId);
//       console.log("Review deleted successfully");

//       navigate("./", { replace: true });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDelete}>Confirm Delete</button>
//     </div>
//   );
// }
