import React, { useEffect, useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { fetchAllMuseums, fetchReviewsByMuseumId } from "../../helpers/fetching";
import markersIcon from "../Images/markers.png";
import AverageRating from "../Reviews/AverageRating"

const MapMarkers = ({ token }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const navigate = useNavigate();
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  // FETCH REVIEWS BY MUSEUM ID
  const fetchReviewsForMuseum = async (museumId) => {
    try {
      const reviewsData = await fetchReviewsByMuseumId(museumId); 
      setReviews(reviewsData);
    } catch (error) {
      setError("Failed to fetch reviews. Please try again later.");
    }
  };

  useEffect(() => {
    const renderMuseums = async () => {
      try {
        const museumArray = await fetchAllMuseums();
        console.log("Museum Array: ", museumArray);
        setMuseums(museumArray);
      } catch (error) {
        setError("Failed to fetch museums. Please try again later.");
      }
    };
    renderMuseums();
  }, []);

  return (
    <>
      {museums.map((museum) => (
        <Marker
          key={museum.museumId}
          position={{
            lat: parseFloat(museum.lat),
            lng: parseFloat(museum.lng),
          }}
          icon={{
            url: markersIcon,
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          onClick={() => {
            fetchReviewsForMuseum(museum.museumId);
            setSelectedMarker(museum);
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedMarker.lat) + 0.01,
            lng: parseFloat(selectedMarker.lng),
          }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div style={{ maxWidth: "300px", maxHeight: "50vh" }}>
            <img
              src={selectedMarker.image}
              alt={selectedMarker.museumName}
              style={{ width: "300px" }}
            />
            <h3>{selectedMarker.museumName}</h3>
            <p>{selectedMarker.description}</p>
            {/* <p>{selectedMarker.address}</p> */}

            <AverageRating museumId={selectedMarker.museumId} reviews={reviews} />

            <button
              className="detailsButton"
              onClick={() => {
                navigate(`/museums/${selectedMarker.museumId}`);
              }}
            >
              See Details
            </button>

            <p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedMarker.lat},${selectedMarker.lng}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
export default MapMarkers;
