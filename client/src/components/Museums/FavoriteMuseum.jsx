import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../Redux/favoriteSlice";
import { addNewFavorite, deleteFavorite } from "../../helpers/fetching";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export default function FavoriteMuseum({ userId, museumId, token }) {
  const favoriteMuseums = useSelector(selectFavorites);
  const dispatch = useDispatch();

  console.log("favoritemuseum", favoriteMuseums);

  const isFavorite = favoriteMuseums.some(
    (item) => item.museumId === Number(museumId)
  );

  const handleAddFavorite = async () => {
    if (!isFavorite) {
      console.log("isFavorite", isFavorite);
      const addedFavorite = await addNewFavorite(userId, museumId, token);
      dispatch(addFavorite(addedFavorite));
    }
  };

  const handleRemoveFavorite = async () => {
    if (isFavorite) {
      try {
        // Find the favorite object with matching userId
        const favoriteToRemove = favoriteMuseums.find(
          (favorite) =>
            favorite.userId === Number(userId) &&
            favorite.museumId === Number(museumId)
        );
        console.log(
          "remove this",
          favoriteMuseums.find(
            (favorite) =>
              favorite.userId === Number(userId) &&
              favorite.museumId === Number(museumId)
          )
        );

        if (favoriteToRemove) {
          const favoriteId = favoriteToRemove.favoriteId;
          await deleteFavorite(favoriteId, token);

          dispatch(removeFavorite({ favoriteId }));
        }
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
          <HiOutlineHeart
            size={36}
            color="#95BF74"
            onClick={handleAddFavorite}
          />
          <span className="favorite-overlay">Add to Favorites</span>
        </>
      )}
    </div>
  );
}
