import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../Redux/favoriteSlice";
import { fetchAllMuseums } from "../../helpers/fetching";
import "./MyMuseums.css";
import FavoriteMuseum from "../Museums/FavoriteMuseum";

export default function MyMuseumsList({ museumId, userId, token }) {
  const favoriteMuseums = useSelector(selectFavorites);
  console.log("favorite museums:", favoriteMuseums);

  const [favoriteMuseumsData, setFavoriteMuseumsData] = useState([]);

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
          {favoriteMuseumsData.map((museum) => (
            <div className="favorites-card" key={museum.museumId}>
              <div className="overlay flex items-center justify-center">
                <FavoriteMuseum
                  userId={userId}
                  museumId={museumId}
                  token={token}
                />
              </div>
              <h2>{museum.museumName}</h2>
              <img className="museum-img" src={museum.image} />
              <p>{museum.description}</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
