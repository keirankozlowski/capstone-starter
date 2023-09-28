import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authenticate",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const payload = action.payload;
      state.user = payload.username;
      state.token = payload.token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.authenticate.user;
export const selectCurrentToken = (state) => state.authenticate.token;