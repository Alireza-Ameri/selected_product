import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { usersApi } from "@/src/services/users";
import { productsApi } from "@/src/services/products";

import selectedProductsReducer from "./selectedProductsSlice"

export const store = configureStore({
  reducer: {
    selectedProducts:selectedProductsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
