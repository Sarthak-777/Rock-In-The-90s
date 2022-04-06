import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://youtube-search-results.p.rapidapi.com/youtube-search/";

const youtubeHeaders = {
  "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  "X-RapidAPI-Key": "69364fda7emsh52f81baa04dc3b3p194411jsnce42c85832fd",
};

const createRequest = (url) => ({ url, headers: youtubeHeaders });

export const youtubeSearchApi = createApi({
  reducerPath: "youtubeSearchApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: ({ title, artist }) => createRequest(`?q=${artist} ${title}`),
    }),
  }),
});

export const { useGetSearchResultsQuery } = youtubeSearchApi;
