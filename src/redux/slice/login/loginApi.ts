import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: {
        username: string;
        password: string;
        expiresInMins: number;
      }) => ({
        url: "/login",
        method: "POST",
        body: credentials,
        // credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
