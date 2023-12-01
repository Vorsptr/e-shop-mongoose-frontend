import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    mode: "dark",
  },
  reducers: {
    toggleMode(state) {
      if (mode === "dark") {
        state.mode = "white";
      } else {
        state.mode = "dark";
      }
    },
  },
});

export const selectMode = (state) => state.ui.mode;
export const uiActions = uiSlice.actions;

export default uiSlice;
