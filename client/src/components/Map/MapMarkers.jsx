import React from "react";
import { Marker } from "@react-google-maps/api";

const markers = [
  {
    position: { lat: 40.779434, lng: -73.963402 },
    title: "The Metropolitan Museum of Art",
  },
  {
    position: { lat: 40.782951, lng: -73.958992 },
    title: "The Guggenheim Museum",
  },
  {
    position: { lat: 40.761509, lng: -73.978271 },
    title: "The MoMa",
  },
  {
    position: { lat: 40.739613, lng: -74.008980 },
    title: "The Whitney Museum of American Art",
  },
  {
    position: { lat: 40.781303, lng: -73.974113 },
    title: "American Museum of Natural History",
  },
]

const MapMarkers = () => {
  return (
    <>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          title={marker.title}
        />
      ))}
    </>
  );
};

export default MapMarkers;