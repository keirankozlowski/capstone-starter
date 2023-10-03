import React from "react";

const MapPanel = ({ museums }) => {
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
