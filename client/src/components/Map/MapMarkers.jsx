import React, { useEffect, useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { fetchAllMuseums } from "../../helpers/fetching";
const MapMarkers = () => {
  const [mapMarkers, setMapMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const navigate = useNavigate();
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);
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
          onClick={() => {
            setSelectedMarker(museum);
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          // position={selectedMarker.position}
          position={{
            lat: parseFloat(selectedMarker.lat),
            lng: parseFloat(selectedMarker.lng),
          }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <h3>{selectedMarker.title}</h3>
            <p>{selectedMarker.details}</p>
            <p>{selectedMarker.address}</p>
            <button
              className="character-buttons"
              onClick={() => {
                // Here, you should use the museum's ID from the selectedMarker
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
