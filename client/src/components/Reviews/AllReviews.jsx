import React, { useState, useEffect } from "react";
import { fetchAllReviews, addReview, editReview } from "../../helpers/fetching";
import EditReview from "./EditReview";

export default function AllReviews({ token }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const [selectedReview, setSelectedReview] = useState(null)

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

  const handleEditReview = (review) => {
    setSelectedReview(review);
  };

  const handleCancelEdit = () => {
    setSelectedReview(null);
  };

  return (
    <>
    <h1> Get All Reviews</h1>
    {reviews.map((review) => (
        <div key={review.reviewId}>
            <p>Rating: {review.rating}</p>
          <p>{review.body}</p>
          <p>{review.date}</p>
        </div>
      ))}

      {selectedReview && (
        <EditReview
          reviewId={selectedReview.reviewId}
          onCancel={handleCancelEdit}
          token={token}
        />
      )}
    </>
  );
}




// import React, { useState, useEffect } from "react";
// import {
//   fetchAllReviews,
//   addReview,
// } from "../../helpers/fetching"; // Import your API functions without the "WithToken" suffix
// // import SingleReview from "./SingleReview";

// export default function AllReviews({ token }) {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);
//   const [newReview, setNewReview] = useState({
//     rating: "",
//     body: "",
//   });

//   useEffect(() => {
//     const renderReviews = async () => {
//       try {
//         const reviewArray = await fetchAllReviews(); // Pass the token to your API function
//         console.log("Review Array: ", reviewArray);
//         setReviews(reviewArray);
//       } catch (error) {
//         setError("Failed to fetch reviews. Please try again later.");
//       }
//     };
//     renderReviews();
//   }, []); 

//   const handleReviewChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview((prevReview) => ({
//       ...prevReview,
//       [name]: value,
//     }));
//   };

//   const handleAddReview = async () => {
//     try {
//       const response = await addReview(
//         token,
//         newReview.rating,
//         newReview.body
//       ); // Pass the token and new review data to your addReview function
//       if (response.success) {
//         // If the review was successfully added, you can update the reviews list
//         const updatedReviews = [response.data, ...reviews];
//         setReviews(updatedReviews);
//         setNewReview({
//           rating: "",
//           body: "",
//         });
//       } else {
//         setError("Failed to add a review. Please try again later.");
//       }
//     } catch (error) {
//       setError("Failed to add a review. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <h1>Get All Reviews</h1>
//       <div>
//         <h2>Add a New Review</h2>
//         <label>
//           Rating:
//           <input
//             type="number"
//             name="rating"
//             value={newReview.rating}
//             onChange={handleReviewChange}
//           />
//         </label>
//         <label>
//           Review:
//           <textarea
//             name="body"
//             value={newReview.body}
//             onChange={handleReviewChange}
//           />
//         </label>
//         <button onClick={handleAddReview}>Add Review</button>
//       </div>
//       {error && <p>{error}</p>}
//       {reviews.map((review) => (
//         <div key={review.reviewId}>
//           <p>Rating: {review.rating}</p>
//           <p>{review.body}</p>
//           <p>{review.date}</p>
//         </div>
//       ))}
//     </>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { fetchAllReviews } from "../../helpers/fetching";
// import SingleReview from "./SingleReview";

// export default function AllReviews() {
//   const [reviews, setReviews] = useState([]);
//   const [error, setError] = useState(null);

// // FETCH ALL REVIEWS

//   useEffect(() => {
//     const renderReviews = async () => {
//       try {
//         const reviewArray = await fetchAllReviews();
//         console.log("Review Array: ", reviewArray);
//         setReviews(reviewArray);
//         return reviewArray;
//       } catch (error) {
//         setError("Failed to fetch reviews. Please try again later.");
//       }
//     };
//     renderReviews();
//   }, []);

//   return (
//   <>
//     <h1> Get All Reviews</h1>
//     {reviews.map((review) => (
//         <div key={review.reviewId}>
//             <p>Rating: {review.rating}</p>
//           <p>{review.body}</p>
//           <p>{review.date}</p>
//         </div>
//       ))}
//     </>
//   );
// }

