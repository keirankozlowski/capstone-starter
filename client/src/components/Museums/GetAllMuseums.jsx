import React, { useState, useEffect } from "react";
import { fetchAllMuseums } from "../../helpers/fetching";
import "./AllMuseums.css"; // Import your CSS file

export default function GetAllMuseums() {
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderMuseums = async () => {
      try {
        const museumArray = await fetchAllMuseums();
        console.log("Museum Array: ", museumArray);
        setMuseums(museumArray);
      } catch (error) {
        setError("Failed to fetch museums. Please try again later.");
      }
    };
    renderMuseums();
  }, []);

  return (
    <div>
      <h1>Get All Museums</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {museums.map((museum) => (
            <li key={museum.museumName} className="museum-item">
              <h2>{museum.museumName}</h2>
              <p>{museum.description}</p>
              <img src={museum.image} alt={museum.museumName} className="museum-image" />
              <a href={museum.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}





// import React, { useState, useEffect } from "react";
// import { fetchAllMuseums } from "../../helpers/fetching";
// import "./AllMuseums.css"; // Import your CSS file

// export default function GetAllMuseums() {
//   const [museums, setMuseums] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const renderMuseums = async () => {
//       try {
//         const museumArray = await fetchAllMuseums();
//         console.log("Museum Array: ", museumArray);
//         setMuseums(museumArray);
//       } catch (error) {
//         setError("Failed to fetch museums. Please try again later.");
//       }
//     };
//     renderMuseums();
//   }, []);

//   return (
//     <div>
//       <h1>Get All Museums</h1>

//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <ul>
//           {museums.map((museum) => (
//             <li key={museum.museumName}>
//               <h2>{museum.museumName}</h2>
//               <p>{museum.description}</p>
//               <img src={museum.image} alt={museum.museumName} />
//               <a href={museum.link} target="_blank" rel="noopener noreferrer">
//                 Learn More
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { fetchAllMuseums } from "../../helpers/fetching";

// export default function GetAllMuseums() {
//   const [museums, setMuseums] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const renderMuseums = async () => {
//       try {
//         const museumArray = await fetchAllMuseums();
//         console.log("Museum Array: ", museumArray);
//         setMuseums(museumArray);
//       } catch (error) {
//         setError("Failed to fetch museums. Please try again later.");
//       }
//     };
//     renderMuseums();
//   }, []);

//   return (
//     <div>
//       <h1>Get All Museums</h1>

//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <ul>
//           {museums.map((museum) => (
//             <li key={museum.museumId}>
//               <h2>{museum.museumName}</h2>
//               <p>{museum.description}</p>
//               <img src={museum.imageSrc} alt={museum.imageAlt} />
//               <a href={museum.link} target="_blank" rel="noopener noreferrer">
//                 Learn More
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }





// import React from "react";
// import { useState, useEffect } from "react";
// import { fetchAllMuseums } from "../../helpers/fetching";

// export default function GetAllMuseums() {
//   const [museums, setMuseums] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const renderMuseums = async () => {
//       try {
//         const museumArray = await fetchAllMuseums();
//         console.log("Museum Array: ", museumArray);
//         setMuseums(museumArray);
//         return museumArray;
//       } catch (error) {
//         setError("Failed to fetch museums. Please try again later.");
//       }
//     };
//     renderMuseums();
//   }, []);

//   return (
//     <>
//       <h1>Get All Museums</h1>

//       {museums.map((museum) => (
//         <div key={museum.museumId}>
//           <p>{museum.museumName}</p>
//         </div>
//       ))}
//     </>
//   );
// }