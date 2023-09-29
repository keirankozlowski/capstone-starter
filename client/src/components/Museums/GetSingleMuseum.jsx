import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewsByMuseumId, fetchSingleMuseumById } from "../../helpers/fetching";
import SingleReview from "../Reviews/SingleReview";
import "./AllMuseums.css";
import CreateReview from "../Reviews/CreateReview";
import StarRating from "../Reviews/StarRating";

export default function GetSingleMuseum() {
  const navigate = useNavigate();
  const params = useParams();
  const [museum, setMuseum] = useState({});
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([])

  async function getMuseumDetails() {
    try {
      const museumData = await fetchSingleMuseumById(params.museumId);
      setMuseum(museumData);
      const museumReviews = await fetchReviewsByMuseumId(params.museumId);
      setReviews(museumReviews);
    } catch (err) {
      setError("Failed to fetch museum details. Please try again later.");
    }
  }

  useEffect(() => {
    getMuseumDetails();
  }, [params.museumId]);

  // CALCULATES AVERAGE RATING: 
  const averageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  return (
    <div className="single-museum-page">
      {/* MUSEUM DETAILS  */}
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="single-museum-card museum-item" key={museum.museumId}>
          <h3 className="museum-headers">{museum.museumName}</h3>
          <p>{museum.description}</p>
          <img src={museum.image} alt={museum.museumName} className="museum-image" />
          <a href={museum.link} target="_blank" rel="noopener noreferrer" className="museum-link">
            Learn More
          </a>
          <br />

          {/* REVIEWS */}
          <div className="averageRating"> 
          Average Rating: <StarRating rating={averageRating()} /> 
          {averageRating().toFixed(1)}
          </div>

          <SingleReview museumId={params.museumId} />

          <CreateReview setReviews={setReviews} />
          {/* <CreateReview setReviews={setReviews} token={token} /> */}

          <button
            className="museum-buttons"
            onClick={() => {
              navigate(`/map`);
            }}
          >
            Back to Map
          </button>
        </div>
      )}
    </div>
  );
}