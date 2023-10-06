import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  museums: [],
};

const favoriteSlice = createSlice({
  name: "favoriteMuseum",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const museumId = action.payload;
      if (!state.museums.some((item) => item.museumId === museumId)) {
        state.museums.push({ museumId });
      }
      // console.log("museumId in slice", museumId);
    },
    removeFavorite: (state, action) => {
      const museumIdToRemove = action.payload;
      console.log("museum to remove", museumIdToRemove);
      state.museums = state.museums.filter(
        (museum) => museum.museumId !== museumIdToRemove
      );
    },
    resetFavorites: (state) => {
      state.museums = initialState.museums;
    },
  },
});

export const { addFavorite, removeFavorite, resetFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

export const selectFavorites = (state) => state.favoriteMuseum.museums;
