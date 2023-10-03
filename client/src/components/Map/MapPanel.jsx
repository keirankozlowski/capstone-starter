import React, { useEffect, useState } from "react";
import { fetchAllMuseums } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";

const MapPanel = () => {
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const renderMuseums = async () => {
      try {
        const museumArray = await fetchAllMuseums();
        console.log("Museum Array: ", museumArray);
        setMuseums(museumArray);
      } catch (error) {
        setError("Failed to fetch museums");
      }
    };
    renderMuseums();
  }, []);

  return (
    <div className="side-panel">
      <h2>Museums</h2>
      <ul>
        {museums.map((museum) => (
          <li key={museum.museumName}>
                        <img
              src={museum.image}
              alt={museum.museumName}
              style={{ width: "300px" }}
            />
            <h4>{museum.museumName}</h4>
            {/* <p>{museum.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapPanel;
