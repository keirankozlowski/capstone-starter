import React, { useState, useEffect } from "react";
import { fetchReviewsByMuseumId } from "../../helpers/fetching";
import AverageRating from "../Reviews/AverageRating";

const MapPanel = ({ museums, selectedMarker }) => {
  console.log("Selected Marker in MapPanel:", selectedMarker);

  const [error, setError] = useState(null);
  const [museumReviews, setMuseumReviews] = useState({});
  const [selectedMuseum, setSelectedMuseum] = useState(null);

  // FETCH REVIEWS BY MUSEUM ID
  const fetchReviewsForMuseum = async (museumId) => {
    try {
      if (!museumReviews[museumId]) {
        const reviewsData = await fetchReviewsByMuseumId(museumId);
        console.log("Reviews Data for Museum", museumId, reviewsData);
        setMuseumReviews((prevReviews) => ({
          ...prevReviews,
          [museumId]: reviewsData,
        }));
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to fetch reviews. Please try again later.");
    }
  };
  useEffect(() => {
    console.log("Museums in useEffect:", museums);
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

  return (
    <div className="side-panel">
      <h2>Museums</h2>
      {selectedMuseum ? (
        <div>
          <img
            src={selectedMuseum.image}
            alt={selectedMuseum.museumName}
            style={{ width: "300px" }}
          />
          <h3>{selectedMuseum.museumName}</h3>
          <AverageRating
            museumId={selectedMuseum.museumId}
            reviews={museumReviews[selectedMuseum.museumId] || []}
          />
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
              <h4>{museum.museumName}</h4>
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
