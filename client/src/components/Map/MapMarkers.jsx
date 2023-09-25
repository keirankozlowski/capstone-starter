import React, { useEffect, useState } from "react";
import { Marker } from "@react-google-maps/api";

const MapMarkers = () => {
  const [mapMarkers, setMapMarkers] = useState([]);

  useEffect(() => {
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
      {
        position: { lat: 40.756345, lng: -73.923950 },
        title: "The Museum of the Moving Image",
      },
      {
        position: { lat: 40.718796, lng: -73.990070 },
        title: "The Tenement Museum",
      },
      {
        position: { lat: 40.690527, lng: -73.989818 },
        title: "The NY Transit Museum",
      },
      {
        position: { lat: 40.6709108, lng: -73.963316 },
        title: "The Brooklyn Museum",
      },
      {
        position: { lat: 40.7925, lng: -73.9519 },
        title: "The Museum of the City of New York",
      },
    ]
    setMapMarkers(markers)
  }, []);

  return (
    <>
      {mapMarkers.map((marker, index) => (
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