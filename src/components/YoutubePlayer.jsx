import React, { useEffect } from "react";
import { useGetSearchResultsQuery } from "../services/YoutubeSearchApi";
import { useDispatch } from "react-redux";
import { songToPlay } from "../services/PlayerSlice";

function YoutubePlayer({ title, artist }) {
  const { data, isFetching } = useGetSearchResultsQuery({ title, artist });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      songToPlay({
        track: data?.items[0],
        title: title,
        artist: artist,
      })
    );
  }, [dispatch, isFetching]);

  if (isFetching) {
    return (
      <div className="mx-16">
        <p className="text-sm font-semibold text-zinc-200">Loading...</p>
      </div>
    );
  }

  return null;
}

export default YoutubePlayer;
