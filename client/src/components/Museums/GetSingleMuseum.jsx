import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchReviewsByMuseumIdwithUsername,
  fetchSingleMuseumById,
} from "../../helpers/fetching";
import SingleReview from "../Reviews/SingleReview";
import "./AllMuseums.css";
import FavoriteMuseum from "./FavoriteMuseum";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../Redux/favoriteSlice";

export default function GetSingleMuseum({ token, userId }) {
  const favoriteMuseums = useSelector(selectFavorites);
  const navigate = useNavigate();
  const params = useParams();
  const [museum, setMuseum] = useState({});
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  const isFavorite = favoriteMuseums.some(
    (item) => item.museumId === params.museumId
  );
  console.log("isFavorite", isFavorite);

  useEffect(() => {
    async function getMuseumDetails() {
      try {
        const museumData = await fetchSingleMuseumById(params.museumId);
        setMuseum(museumData);
        const museumReviews = await fetchReviewsByMuseumIdwithUsername(
          params.museumId
        );
        setReviews(museumReviews);
      } catch (err) {
        setError("Failed to fetch museum details. Please try again later.");
      }
    }

    getMuseumDetails();
  }, [params.museumId]);

  return (
    <div className="single-museum-page">
      {/* MUSEUM DETAILS  */}
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="single-museum-card museum-item" key={museum.museumId}>
          <div className="overlay flex items-center justify-center">
            <FavoriteMuseum
              userId={userId}
              museumId={params.museumId}
              token={token}
              isFavorite={isFavorite}
            />
          </div>
          <h3 className="museum-headers">{museum.museumName}</h3>
          <p>{museum.description}</p>
          <img
            src={museum.image}
            alt={museum.museumName}
            className="museum-image"
          />
          <a
            href={museum.link}
            target="_blank"
            rel="noopener noreferrer"
            className="museum-link"
          >
            Learn More
          </a>
          <br />

          <SingleReview
            museumId={params.museumId}
            token={token}
            userId={userId}
          />

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
