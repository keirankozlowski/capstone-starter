import React, { useEffect, useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

const MapMarkers = () => {
  const [mapMarkers, setMapMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const markers = [
      {
        position: { lat: 40.779434, lng: -73.963402 },
        title: "The Metropolitan Museum of Art",
        details: "One of the largest and finest art museums in the world.",
        address: "1000 5th Ave, New York, NY 10028, USA",
      },
      {
        position: { lat: 40.782951, lng: -73.958992 },
        title: "The Guggenheim Museum",
        details: "A renowned museum known for its modern art collection.",
        address: "1071 5th Ave, New York, NY 10128, USA",
      },
      {
        position: { lat: 40.761509, lng: -73.978271 },
        title: "The MoMa",
        details: "Museum of Modern Art showcasing contemporary art.",
        address: "11 W 53rd St, New York, NY 10019, USA",
      },
      {
        position: { lat: 40.739613, lng: -74.008980 },
        title: "The Whitney Museum of American Art",
        details: "Museum featuring 20th and 21st-century American art.",
        address: "99 Gansevoort St, New York, NY 10014, USA",
      },
      {
        position: { lat: 40.781303, lng: -73.974113 },
        title: "American Museum of Natural History",
        details: "A world-famous natural history museum and research institution.",
        address: "200 Central Park West, New York, NY 10024, USA",
      },
    ];
    setMapMarkers(markers);
  }, []);

  return (
    <>
      {mapMarkers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          title={marker.title}
          onClick={() => {
            setSelectedMarker(marker);
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.position}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <h3>{selectedMarker.title}</h3>
            <p>{selectedMarker.details}</p>
            <p>{selectedMarker.address}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default MapMarkers;








// import React, { useEffect, useState } from "react";
// import { Marker } from "@react-google-maps/api";

// const MapMarkers = () => {
//   const [mapMarkers, setMapMarkers] = useState([]);

//   useEffect(() => {
//     const markers = [
//       {
//         position: { lat: 40.779434, lng: -73.963402 },
//         title: "The Metropolitan Museum of Art",
//       },
//       {
//         position: { lat: 40.782951, lng: -73.958992 },
//         title: "The Guggenheim Museum",
//       },
//       {
//         position: { lat: 40.761509, lng: -73.978271 },
//         title: "The MoMa",
//       },
//       {
//         position: { lat: 40.739613, lng: -74.008980 },
//         title: "The Whitney Museum of American Art",
//       },
//       {
//         position: { lat: 40.781303, lng: -73.974113 },
//         title: "American Museum of Natural History",
//       },
//       {
//         position: { lat: 40.756345, lng: -73.923950 },
//         title: "The Museum of the Moving Image",
//       },
//       {
//         position: { lat: 40.718796, lng: -73.990070 },
//         title: "The Tenement Museum",
//       },
//       {
//         position: { lat: 40.690527, lng: -73.989818 },
//         title: "The NY Transit Museum",
//       },
//       {
//         position: { lat: 40.6709108, lng: -73.963316 },
//         title: "The Brooklyn Museum",
//       },
//       {
//         position: { lat: 40.7925, lng: -73.9519 },
//         title: "The Museum of the City of New York",
//       },
//     ]
//     setMapMarkers(markers)
//   }, []);

//   return (
//     <>
//       {mapMarkers.map((marker, index) => (
//         <Marker
//           key={index}
//           position={marker.position}
//           title={marker.title}
//         />
//           ))}
//         </>
//       );
//     };

// export default MapMarkers;