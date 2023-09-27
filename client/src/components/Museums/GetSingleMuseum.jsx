import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleMuseumById } from "../../helpers/fetching";
import "./AllMuseums.css"; // Import the CSS file from the previous component

export default function GetSingleMuseum() {
  const navigate = useNavigate();
  const params = useParams();
  const [museum, setMuseum] = useState({});
  const [error, setError] = useState(null);

  async function getMuseumDetails() {
    // fetch data from API
    try {
      const museumData = await fetchSingleMuseumById(params.museumId);
      setMuseum(museumData);
    } catch (err) {
      setError("Failed to fetch museum details. Please try again later.");
    }
  }

  useEffect(() => {
    getMuseumDetails();
  }, []);

  return (
    <div className="single-museum-page">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="single-museum-card museum-item" key={museum.museumId}>
          <h3 className="museum-headers">{museum.museumName}</h3>
          <p>{museum.description}</p>
          <img src={museum.image} alt={museum.museumName} className="museum-image" />
          <a href={museum.link} target="_blank" rel="noopener noreferrer" className="museum-link">
            Learn More
          </a>
          <br />
          <button
            className="museum-buttons"
            onClick={() => {
              navigate(`/map`);
            }}
          >
            Back to Map
          </button>
        </div>
      )}
    </div>
  );
}




// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchSingleMuseumById } from "../../helpers/fetching";
// import "./AllMuseums.css"; // Import your CSS file

// export default function GetSingleMuseum() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [museum, setMuseum] = useState({});
//   const [error, setError] = useState(null);

//   async function getMuseumDetails() {
//     // fetch data from API
//     try {
//       const museumData = await fetchSingleMuseumById(params.museumId);
//       setMuseum(museumData);
//     } catch (err) {
//       setError("Failed to fetch museum details. Please try again later.");
//     }
//   }

//   useEffect(() => {
//     getMuseumDetails();
//   }, []);

//   return (
//     <div className="single-museum-page">
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <div className="single-museum-card" key={museum.museumId}>
//           <h3 className="museum-headers">{museum.museumName}</h3>
//           <p>{museum.description}</p>
//           <img src={museum.image} alt={museum.museumName} className="museum-image" />
//           <a href={museum.link} target="_blank" rel="noopener noreferrer" className="museum-link">
//             Learn More
//           </a>
//           <br />
//           <button
//             className="museum-buttons"
//             onClick={() => {
//               navigate(`/map`);
//             }}
//           >
//             Back to Map
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }






// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchSingleMuseumById } from "../../helpers/fetching";

// export default function GetSingleMuseum() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [museum, setMuseum] = useState({});

//   async function getMuseumDetails() {
//     // fetch data from API
//     try {
//       setMuseum(await fetchSingleMuseumById(params.museumId));
//       console.log(museum);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   useEffect(() => {
//     getMuseumDetails();
//   }, []);

//   return (
//     <div className="single-museum-page">
//       <div className="single-museum-card" key={museum.museumId}>
//         <h3 className="museum-headers">{museum.museumName}</h3>
//         <p>{museum.description}</p>
//         <br />
//         <button
//           className="museum-buttons"
//           onClick={() => {
//             navigate(`/map`);
//           }}
//         >
//           Back to Map
//         </button>
//       </div>
//     </div>
//   );
// }
