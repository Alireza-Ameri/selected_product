import { createApi } from "@reduxjs/toolkit/query/react";

import { IUser } from "@/src/types/users";

import { baseQuery } from "./customFetchBaseQuery";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
    }),
    getUserById: builder.query<IUser, { id: string }>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery,useGetUserByIdQuery } = usersApi;
