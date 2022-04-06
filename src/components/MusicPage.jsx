import React, { useEffect } from "react";
import {
  useGetPlaylistTracksQuery,
  useGetPlaylistQuery,
} from "../services/spotifyApi";
import SpotifyPlayer from "react-spotify-web-playback";
// import SpotifyWebApi from "spotify-web-api-node";
import Tracks from "./Tracks";

function MusicPage() {
  const { data: playlistInfo, isFetching: playlistFetching } =
    useGetPlaylistQuery();

  if (playlistFetching === true) {
    return (
      <div className="container mx-auto my-20 ">
        <p className="font-semibold text-2xl text-zinc-200">
          Playlist Loading...
        </p>
      </div>
    );
  }
  return (
    <div className="container mx-auto my-20 ">
      <div className="flex m-8 shadow-[0px_0px_2px_0px] shadow-zinc-400 py-3">
        <img
          src={playlistInfo?.images[0].url}
          className="h-64 w-64 mx-4"
          alt="playlist Image"
        />
        <div className="flex flex-col my-5 justify-center">
          <p className="text-md font-light text-zinc-200 mb-1">PLAYLIST</p>
          <p className="font-bold text-6xl text-zinc-200 mb-6">
            {playlistInfo?.name}
          </p>
          <p className="font-semibold text-sm text-zinc-400">
            {playlistInfo?.description}
          </p>
          <p className="text-zinc-100 font-semibold text-sm">
            Spotify Followers: {playlistInfo?.followers.total}
          </p>
        </div>
      </div>
      <Tracks />
    </div>
  );
}

export default MusicPage;
