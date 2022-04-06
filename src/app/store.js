import { configureStore } from "@reduxjs/toolkit";
import { randomUserApi } from "../services/randomUsersApi";
import { rockPlaylistApi } from "../services/spotifyApi";
import { youtubeSearchApi } from "../services/YoutubeSearchApi";
import playerSlice from "../services/PlayerSlice";

export const store = configureStore({
  reducer: {
    [randomUserApi.reducerPath]: randomUserApi.reducer,
    [rockPlaylistApi.reducerPath]: rockPlaylistApi.reducer,
    [youtubeSearchApi.reducerPath]: youtubeSearchApi.reducer,
    player: playerSlice,
  },
});
