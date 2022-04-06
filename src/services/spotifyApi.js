import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://spotify23.p.rapidapi.com/";

const playlistHeaders = {
  "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  "X-RapidAPI-Key": "69364fda7emsh52f81baa04dc3b3p194411jsnce42c85832fd",
};

const createRequest = (url) => ({ url, headers: playlistHeaders });

export const rockPlaylistApi = createApi({
  reducerPath: "rockPlaylistApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPlaylist: builder.query({
      query: () => createRequest(`/playlist/?id=37i9dQZF1DX1rVvRgjX59F`),
    }),
    getPlaylistTracks: builder.query({
      query: () =>
        createRequest(`/playlist_tracks/?id=37i9dQZF1DX1rVvRgjX59F&limit=10`),
    }),
  }),
});

export const { useGetPlaylistQuery, useGetPlaylistTracksQuery } =
  rockPlaylistApi;
