import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript, useJsApiLoader } from "@react-google-maps/api";
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

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  return (
    <div>
      {isLoaded && <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={center}
          options={{ styles: customMapStyle }}
        >
          <MapMarkers markers={mapMarkers} />
        </GoogleMap>}
    </div>
  );
};
export default Map;
