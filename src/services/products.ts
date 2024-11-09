import { createApi } from "@reduxjs/toolkit/query/react";

import { IProduct } from "@/src/types/products";

import { baseQuery } from "./customFetchBaseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
