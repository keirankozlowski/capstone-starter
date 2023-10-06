import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../Redux/favoriteSlice";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function FavoriteMuseum({ museumId }) {
  const favoriteMuseums = useSelector(selectFavorites);
  console.log("favoriteMuseums", favoriteMuseums);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(
    favoriteMuseums.includes(museumId)
  );

  console.log("isFavorite:", isFavorite);

  // useEffect(() => {
  //   setIsFavorite(favoriteMuseums.includes(museumId));
  // }, [favoriteMuseums, museumId]);

  const handleAddFavorite = () => {
    dispatch(addFavorite(museumId));
    // console.log("is this adding");
    setIsFavorite(true);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(museumId));
    console.log("is this removing");
    setIsFavorite(false);
  };

  return (
    <div className="favorite-button">
      {isFavorite ? (
        <>
          <HiHeart
            size={36}
            className="heart-button"
            onClick={handleRemoveFavorite}
          />
          <span className="favorite-overlay">Remove from Favorites</span>
        </>
      ) : (
        <>
          <HiOutlineHeart size={36} onClick={handleAddFavorite} />
          <span className="favorite-overlay">Add to Favorites</span>
        </>
      )}
    </div>
  );
}
