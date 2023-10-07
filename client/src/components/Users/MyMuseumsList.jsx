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

  const isFavorite = favoriteMuseums.some((item) => item.museumId === museumId);

  useEffect(() => {
    async function fetchFavoriteMuseumsData() {
      const allMuseums = await fetchAllMuseums();
      const filteredMuseums = allMuseums.filter((museum) =>
        favoriteMuseums.some(
          (favorite) => favorite.museumId === museum.museumId
        )
      );

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
              <FavoriteMuseum museumId={museumId} isFavorite={isFavorite} />
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
