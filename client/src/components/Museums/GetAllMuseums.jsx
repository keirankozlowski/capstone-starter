import React from "react";
import { useState, useEffect } from "react";
import { fetchAllMuseums } from "../../helpers/fetching";

export default function GetAllMuseums() {
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderMuseums = async () => {
      try {
        const museumArray = await fetchAllMuseums();
        console.log("Museum Array: ", museumArray);
        setMuseums(museumArray);
        return museumArray;
      } catch (error) {
        setError("Failed to fetch museums. Please try again later.");
      }
    };
    renderMuseums();
  }, []);

  return (
    <>
      <h1>Get All Museums</h1>

      {museums.map((museum) => (
        <div key={museum.museumId}>
          <p>{museum.museumName}</p>
        </div>
      ))}
    </>
  );
}
