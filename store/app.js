import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import globalReducer from "./global/globalSlice";
import { apiSlice } from "../api/apiSlice";
import { productApi } from "../api/productSlice";
export const store = configureStore({
  reducer: {
    global: globalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, productApi.middleware]),
});

setupListeners(store.dispatch);
