import React, { useState, useEffect } from "react";
import { fetchReviewsByMuseumId } from "../../helpers/fetching";
import AverageRating from "../Reviews/AverageRating";

const MapPanel = ({ museums }) => {
  const [error, setError] = useState(null);
  const [museumReviews, setMuseumReviews] = useState({});

    // FETCH REVIEWS BY MUSEUM ID
    const fetchReviewsForMuseum = async (museumId) => {
      try {
        const reviewsData = await fetchReviewsByMuseumId(museumId);
        setMuseumReviews((prevReviews) => ({
          ...prevReviews,
          [museumId]: reviewsData,
        }));
      } catch (error) {
        setError("Failed to fetch reviews. Please try again later.");
      }
    };
    useEffect(() => {
      museums.forEach((museum) => {
        fetchReviewsForMuseum(museum.museumId);
      });
    }, [museums]);

  return (
    <div className="side-panel">
      <h2>Museums</h2>
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
            {/* <p>{museum.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapPanel;
