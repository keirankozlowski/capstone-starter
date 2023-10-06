import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../Redux/favoriteSlice";
import { fetchAllMuseums } from "../../helpers/fetching";
import FavoriteMuseum from "../Museums/FavoriteMuseum";
import "./MyMuseums.css";

export default function MyMuseumsList({ museumId }) {
  const favoriteMuseums = useSelector(selectFavorites);
  console.log("favorite museums:", favoriteMuseums);

  const [favoriteMuseumsData, setFavoriteMuseumsData] = useState([]);

  useEffect(() => {
    async function fetchFavoriteMuseumsData() {
      const museums = await fetchAllMuseums();
      const favoriteMuseumsIntegers = favoriteMuseums
        .map((museum) => Number.parseInt(museum.museumId, 10))
        .filter((museumId) => !Number.isNaN(museumId));
      console.log("integer:", favoriteMuseumsIntegers);

      console.log("museums in profile:", museums);
      const filteredMuseums = museums.filter((museum) =>
        favoriteMuseumsIntegers.includes(museum.museumId)
      );
      console.log("filtered museums", filteredMuseums);
      setFavoriteMuseumsData(filteredMuseums);
    }

    fetchFavoriteMuseumsData();
  }, [favoriteMuseums]);

  return (
    <>
      <div className="favorites-container">
        <h1>My Favorite Museums</h1>
        <ul>
          {/* {favoriteMuseums} */}
          {favoriteMuseumsData.map((museum) => (
            <li className="favorites-card" key={museum.museumId}>
              <FavoriteMuseum museumId={museumId} />
              {/* <p>{museum.museumId}</p> */}
              <h2>{museum.museumName}</h2>
              <img className="museum-img" src={museum.image} />
              <p>{museum.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
