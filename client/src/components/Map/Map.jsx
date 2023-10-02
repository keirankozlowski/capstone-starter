import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import MapMarkers from "./MapMarkers";
import customMapStyle from "./mapStyle.json";

const mapStyles = {
  width: "100%",
  height: "100vh",
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
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });
  const onOptionChange = (e) => {
    if (selectedTypes.includes(e.target.value)) {
      setSelectedTypes(selectedTypes.filter((t) => e.target.value !== t));
    } else {
      setSelectedTypes([...selectedTypes, e.target.value]);
    }
  };

  return (
    <div>
      <label>
        <h4 className="search-filter-header"> Search:{""}</h4>
        <br />
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
