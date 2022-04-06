import React from "react";
import YouTube from "react-youtube";

const opts = {
  height: "100",
  width: "150",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Player({ play }) {
  return (
    <div className="sticky bottom-0">
      <div className="w-full mx-auto bg-zinc-900 flex justify-between">
        <div className="flex h-150 p-3 pl-10">
          <YouTube videoId={play.track?.id} opts={opts} />
          <div className="flex flex-col mx-8 justify-center">
            <h1 className="font-semibold text-lg text-zinc-300">
              {play.track?.title}
            </h1>
            <div className="flex items-center">
              {play.track ? (
                <>
                  <img
                    src={play.track?.author?.avatars[0]?.url}
                    className="h-8 w-8 rounded-full"
                  />
                  <h1 className="font-semibold text-sm text-zinc-300 mx-3">
                    {play.track?.author?.name}
                  </h1>
                </>
              ) : (
                <h1 className="font-semibold text-zinc-300">Loading...</h1>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-zinc-300 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Player;
