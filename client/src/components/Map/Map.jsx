import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
// import "./App.css";

// import 'dotenv/config';
// require('dotenv').config({ path: '.env.local' });

const mapStyles = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: -1.2884,
  lng: 36.8233,
};

const Map = () => {

  return (
    <div>
      <LoadScript googleMapsApiKey="REACT_APP_GOOGLE_API_KEY">
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