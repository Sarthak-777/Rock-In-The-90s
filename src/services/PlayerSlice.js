import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    title: "",
    artist: "",
    track: [],
  },
  reducers: {
    songToPlay: (state, action) => {
      return {
        ...state,
        title: action.payload.title,
        artist: action.payload.artist,
        track: action.payload.track,
      };
    },
  },
});

export const { songToPlay } = playerSlice.actions;

export default playerSlice.reducer;
