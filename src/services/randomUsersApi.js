import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://randomuser.me";

export const randomUserApi = createApi({
  reducerPath: "randomUserApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFifteenUsers: builder.query({
      query: () => "/api/?results=15",
    }),
  }),
});

export const { useGetFifteenUsersQuery } = randomUserApi;
