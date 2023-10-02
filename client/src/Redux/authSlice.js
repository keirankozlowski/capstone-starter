import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authenticate",
  initialState: { username: null, userId: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const payload = action.payload;
      state.username = payload.username;
      state.userId = payload.userId;
      state.token = payload.token;
      console.log("payload", payload);
    },
    logOut: (state) => {
      state.username = null;
      state.userId = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUsername = (state) => state.authenticate.username;
export const selectCurrentUserId = (state) => state.authenticate.userId;

export const selectCurrentToken = (state) => state.authenticate.token;
