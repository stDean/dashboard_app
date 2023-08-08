import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239d81e000014",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    SET_MODE: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { SET_MODE } = globalSlice.actions;
export default globalSlice.reducer;
