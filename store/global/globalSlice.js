import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isZoom: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsZoom: (state, action) => {
      state.isZoom = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsZoom } = globalSlice.actions;

export default globalSlice.reducer;
