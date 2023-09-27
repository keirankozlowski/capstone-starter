import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
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
  const [mapMarkers, setMapMarkers] = useState([]);

  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={center}
          options={{ styles: customMapStyle }}
        >
          <MapMarkers markers={mapMarkers} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;
