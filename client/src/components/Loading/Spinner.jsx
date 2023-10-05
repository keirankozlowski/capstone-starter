import React from "react";
import "../Museums/AllMuseums.css";
import museumLogo from "../Images/museumlogo.png";

function Spinner() {
  return (
    <>
      <div className="loader">
        <img src={museumLogo} />
      </div>
    </>
  );
}

export default Spinner;
