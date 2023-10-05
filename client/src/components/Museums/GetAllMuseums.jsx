import React, { useState, useEffect } from "react";
import { fetchAllMuseums } from "../../helpers/fetching";
import "./AllMuseums.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../Loading/Spinner";

export default function GetAllMuseums() {
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

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

  const searchedMuseumsPage = searchParam
    ? museums.filter((museum) =>
        museum.museumName.toLowerCase().includes(searchParam.toLowerCase())
      )
    : museums;

  console.log("Search Param: ", searchParam);
  console.log("Filtered Museums: ", searchedMuseumsPage);

  return (
    <div>
      <h1>All Museums</h1>

      <label>
        <h4 className="search-filter-header"> Search:</h4>
        <br />
        <input
          id="search-museums-bar"
          type="text"
          placeholder="search museums"
          onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
        />
      </label>

      {searchedMuseumsPage.length === 0 ? (
        <Spinner />
      ) : (
        <div className="all-museums">
          {searchedMuseumsPage.map((museum) => (
            <div key={museum.museumName} className="museum-item">
              <h2>{museum.museumName}</h2>
              <img
                src={museum.image}
                alt={museum.museumName}
                className="museum-image"
              />
              <p>{museum.description}</p>

              <a href={museum.link} target="_blank" rel="noopener noreferrer">
                Learn More at Museum Website
              </a>
              <button
                className="detailsButton"
                onClick={() => {
                  navigate(`/museums/${museum.museumId}`);
                }}
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
