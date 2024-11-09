import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com",
  prepareHeaders: (headers) => {
    return headers;
  },
});
