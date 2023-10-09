import React, { useState, useEffect } from "react";
import { fetchReviewsByMuseumId } from "../../helpers/fetching";
import AverageRating from "../Reviews/AverageRating";
import { useNavigate } from "react-router-dom";
import SingleReview from "../Reviews/SingleReview";

const MapPanel = ({ museums, selectedMarker, setSelectedMarker }) => {

  const [error, setError] = useState(null);
  const [museumReviews, setMuseumReviews] = useState({});
  const [selectedMuseum, setSelectedMuseum] = useState(null);
  const [selectedMuseumReviews, setSelectedMuseumReviews] = useState([]);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const navigate = useNavigate();

  // FETCH REVIEWS BY MUSEUM ID
  const fetchReviewsForMuseum = async (museumId) => {
    try {
      if (!museumReviews[museumId]) {
        const reviewsData = await fetchReviewsByMuseumId(museumId);
        setMuseumReviews((prevReviews) => ({
          ...prevReviews,
          [museumId]: reviewsData,
        }));
        setSelectedMuseumReviews(reviewsData);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  useEffect(() => {
    museums.forEach((museum) => {
      fetchReviewsForMuseum(museum.museumId);
    });
  }, [museums]);

  useEffect(() => {
    if (selectedMarker) {
      setSelectedMuseum(selectedMarker);
      fetchReviewsForMuseum(selectedMarker.museumId);
    } else {
      setSelectedMuseum(null);
    }
  }, [selectedMarker]);

  const handleSelectMuseumByName = (museum) => {
    setSelectedMarker(museum);
    fetchReviewsForMuseum(museum.museumId);
  };

  const exitSingleMuseumView = () => {
    setSelectedMarker(null);
    setSelectedMuseum(null);
    setSelectedMuseumReviews([]);
  };

  return (
    <div className="side-panel"><br />
      {selectedMuseum ? (
        <div>
          <img
            src={selectedMuseum.image}
            alt={selectedMuseum.museumName}
            style={{ width: "300px" }}
          />
          <h3>{selectedMuseum.museumName}</h3>
          <p>
            {descriptionExpanded
              ? selectedMuseum.description
              : selectedMuseum.description.substring(0, 150)}
          </p>
          {selectedMuseum.description.length > 150 && (
            <button
              onClick={() => setDescriptionExpanded(!descriptionExpanded)}
              className="see-more-button"
            >
              {descriptionExpanded ? "See Less" : "See More"}
            </button>
          )}

          <SingleReview
            museumId={selectedMuseum.museumId}
          />

          <button
            className="detailsButton"
            onClick={() => {
              navigate(`/museums/${selectedMarker.museumId}`);
            }}
          >
            See Details
          </button>
          
          <button
            className="exit-button"
            onClick={exitSingleMuseumView}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            &#x2716;
          </button>

        </div>
      ) : (
        <ul>
          {museums.map((museum) => (
            <li key={museum.museumName}>
              <img
                src={museum.image}
                alt={museum.museumName}
                style={{ width: "300px" }}
              />
              <h4
                onClick={() => {
                  handleSelectMuseumByName(museum);
                }}
              >
                {museum.museumName}
              </h4>
              <AverageRating
                museumId={museum.museumId}
                reviews={museumReviews[museum.museumId] || []}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MapPanel;
