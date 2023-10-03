import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import MapMarkers from "./MapMarkers";
import customMapStyle from "./mapStyle.json";
import { fetchAllMuseums } from "../../helpers/fetching";
import MapPanel from "./MapPanel";
import "./Map.css";

const mapStyles = {
  width: "75%",
  height: "75vh",
};
const center = {
  lat: 40.73061,
  lng: -73.935242,
};

const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = () => {
  const [searchParam, setSearchParam] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([
    "art",
    "academic",
    "other",
  ]);
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    const renderMuseums = async () => {
      try {
        const museumArray = await fetchAllMuseums();
        console.log("Museum Array: ", museumArray);
        setMuseums(museumArray);
      } catch (error) {
        setError("Failed to get museums");
      }
    };
    renderMuseums();
  }, []);

  const onOptionChange = (e) => {
    if (selectedTypes.includes(e.target.value)) {
      setSelectedTypes(selectedTypes.filter((t) => e.target.value !== t));
    } else {
      setSelectedTypes([...selectedTypes, e.target.value]);
    }
  };

  return (
    <div className="map-container">
      <div className="mapPanel">
      <label>
        Search: 
        <input
          id="search-museums-bar"
          type="text"
          placeholder="search museums"
          onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
        />
      </label>

      <div className="filter-buttons">
        <input
          type="checkbox"
          id="art"
          value="art"
          checked={selectedTypes.includes("art")}
          onChange={onOptionChange}
        />
        <label htmlFor="art">Art</label>
        <input
          type="checkbox"
          id="academic"
          value="academic"
          checked={selectedTypes.includes("academic")}
          onChange={onOptionChange}
        />
        <label htmlFor="academic">Academic</label>
        <input
          type="checkbox"
          id="other"
          value="other"
          checked={selectedTypes.includes("other")}
          onChange={onOptionChange}
        />
        <label htmlFor="other">Other</label>
      </div>
      <div className="panel-content">
        <MapPanel museums={museums} />
        </div>
      </div>

      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={center}
          options={{ styles: customMapStyle }}
        >
          <MapMarkers searchParam={searchParam} selectedTypes={selectedTypes} />
        </GoogleMap>
      )}
    </div>
  );
};
export default Map;
