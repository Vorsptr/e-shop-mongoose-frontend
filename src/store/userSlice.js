import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
    token: "",
  },
  reducers: {
    addUser(state, action) {
      const { user, token } = action.payload;
      state.isLoggedIn(true);
      state.user = user;
      state.token = token;
    },
  },
});

export const selectToken = (state) => state.user.token;
export const userActions = userSlice.actions;
export default userSlice;
