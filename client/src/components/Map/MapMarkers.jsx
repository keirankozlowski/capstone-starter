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
            <p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedMarker.position.lat},${selectedMarker.position.lng}`}
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





// import React, { useEffect, useState } from "react";
// import { Marker, InfoWindow } from "@react-google-maps/api";

// const MapMarkers = () => {
//   const [mapMarkers, setMapMarkers] = useState([]);
//   const [selectedMarker, setSelectedMarker] = useState(null);

//   useEffect(() => {
//     const markers = [
//       {
//         position: { lat: 40.779434, lng: -73.963402 },
//         title: "The Metropolitan Museum of Art",
//         details: "One of the largest and finest art museums in the world.",
//         address: "1000 5th Ave, New York, NY 10028, USA",
//       },
//       {
//         position: { lat: 40.782951, lng: -73.958992 },
//         title: "The Guggenheim Museum",
//         details: "A renowned museum known for its modern art collection.",
//         address: "1071 5th Ave, New York, NY 10128, USA",
//       },
//       {
//         position: { lat: 40.761509, lng: -73.978271 },
//         title: "The MoMa",
//         details: "Museum of Modern Art showcasing contemporary art.",
//         address: "11 W 53rd St, New York, NY 10019, USA",
//       },
//       {
//         position: { lat: 40.739613, lng: -74.008980 },
//         title: "The Whitney Museum of American Art",
//         details: "Museum featuring 20th and 21st-century American art.",
//         address: "99 Gansevoort St, New York, NY 10014, USA",
//       },
//       {
//         position: { lat: 40.781303, lng: -73.974113 },
//         title: "American Museum of Natural History",
//         details: "A world-famous natural history museum and research institution.",
//         address: "200 Central Park West, New York, NY 10024, USA",
//       },
//     ];
//     setMapMarkers(markers);
//   }, []);

//   return (
//     <>
//       {mapMarkers.map((marker, index) => (
//         <Marker
//           key={index}
//           position={marker.position}
//           title={marker.title}
//           onClick={() => {
//             setSelectedMarker(marker);
//           }}
//         />
//       ))}
//       {selectedMarker && (
//         <InfoWindow
//           position={selectedMarker.position}
//           onCloseClick={() => {
//             setSelectedMarker(null);
//           }}
//         >
//           <div>
//             <h3>{selectedMarker.title}</h3>
//             <p>{selectedMarker.details}</p>
//             <p>{selectedMarker.address}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </>
//   );
// };

// export default MapMarkers;
