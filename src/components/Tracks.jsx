import React from "react";
import { useGetPlaylistTracksQuery } from "../services/spotifyApi";
import Track from "./Track";
import { useSelector } from "react-redux";
import Player from "./Player";

function Tracks() {
  const { data, isFetching } = useGetPlaylistTracksQuery();

  const play = useSelector((state) => state.player);
  console.log(play);

  let count = 1;
  if (isFetching) {
    return (
      <div className="container mx-auto my-5 ">
        <p className="mx-8 font-semibold text-2xl text-zinc-200">
          Tracks Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8">
      <div className="mx-8 grid grid-cols-5">
        <div className="col-span-2 flex">
          <div className="w-8">
            <p className="text-sm text-zinc-200 font-semibold mx-3">#</p>
          </div>
          <p className="text-sm text-zinc-200 font-semibold mx-3">TITLE</p>
        </div>
        <div className="col-span-1">
          <p className="text-sm text-zinc-200 font-semibold mx-3">ALBUM</p>
        </div>
        <div className="col-span-1">
          <p className="text-sm text-zinc-200 font-semibold mx-3">ARTIST</p>
        </div>
        <div className="col-span-1">
          <p className="text-sm text-zinc-200 font-semibold mx-3">DURATION</p>
        </div>
      </div>
      <div>
        {data?.items.map((item) => {
          return (
            <Track
              count={count++}
              image={item.track.album.images[2]}
              title={item.track.name}
              album={item.track.album.name}
              artist={item.track.artists[0].name}
              duration={item.track.duration_ms}
            />
          );
        })}
      </div>
      {play.track && <Player play={play} />}
    </div>
  );
}

export default Tracks;
