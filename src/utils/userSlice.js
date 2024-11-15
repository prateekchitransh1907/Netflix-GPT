import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    signInUser: (state, action) => {
      return action.payload;
    },
    logoutUser: (state, action) => {
      return null;
    },
  },
});

export const { signInUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
