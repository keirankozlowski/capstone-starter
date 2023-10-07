import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

// export const fetchFavoritesByUserIdAsync = createAsyncThunk(
//   "favoriteMuseum/fetchFavoritesByUserId",
//   async (userId) => {
//     const response = await fetchFavoritesByUserId(userId);
//     return response; // Assuming the API returns the user's favorites
//   }
// );

const favoriteSlice = createSlice({
  name: "favoriteMuseum",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action) => {
      const favorite = action.payload;
      if (
        !state.favorites.some((item) => item.museumId === favorite.museumId)
      ) {
        state.favorites.push(favorite);
      }
      console.log("museumId in slice", favorite.museumId);
    },
    removeFavorite: (state, action) => {
      const favoriteToRemove = action.payload;
      console.log("museum to remove", favoriteToRemove.museumId);
      state.favorites = state.favorites.filter(
        (favorite) => favorite.favorite !== favoriteToRemove
      );
    },
    resetFavorites: (state) => {
      state.favorites = initialState.favorites;
    },
    // extraReducers: (builder) => {
    //   builder.addCase(
    //     fetchFavoritesByUserIdAsync.fulfilled,
    //     (state, action) => {
    //       state.favorites = action.payload;
    //     }
    //   );
    // },
  },
});

export const { setFavorites, addFavorite, removeFavorite, resetFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

export const selectFavorites = (state) => state.favoriteMuseum.favorites;
