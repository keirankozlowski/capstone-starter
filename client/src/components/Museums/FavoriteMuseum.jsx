import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../Redux/favoriteSlice";
import { addNewFavorite, deleteFavorite } from "../../helpers/fetching";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function FavoriteMuseum({
  userId,
  museumId,
  token,
  isFavorite,
}) {
  const favoriteMuseums = useSelector(selectFavorites);
  console.log("favoriteMuseums", favoriteMuseums);
  const dispatch = useDispatch();

  // const [isFavorite, setIsFavorite] = useState(
  //   favoriteMuseums.includes(museumId)
  // );

  // const isFavorite = favoriteMuseums.some((item) => item.museumId === museumId);
  // console.log("isFavorite", isFavorite);

  const handleAddFavorite = async () => {
    if (!isFavorite) {
      const addedFavorite = await addNewFavorite(userId, museumId, token);

      dispatch(addFavorite(addedFavorite));
    }
  };

  const handleRemoveFavorite = async (favoriteId, token) => {
    if (isFavorite) {
      try {
        // Perform the API request to delete a favorite
        await deleteFavorite(favoriteId, token);

        // Dispatch the removeFavorite action to update the Redux store
        dispatch(removeFavorite({ favoriteId }));
      } catch (error) {
        console.error("Error removing favorite:", error);
      }
    }
  };

  return (
    <div>
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
