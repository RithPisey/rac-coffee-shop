import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global/globalSlice";
import { apiSlice } from "../api/apiSlice";
export const store = configureStore({
  reducer: {
    counter: globalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});
