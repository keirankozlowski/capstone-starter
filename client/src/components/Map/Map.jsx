import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
const mapStyles = {
  width: '100%',
  height: '100vh',
};
const center = {
  lat: 40.730610,
  lng: -73.935242,
};
const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY; // Define the API key
const Map = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default Map;