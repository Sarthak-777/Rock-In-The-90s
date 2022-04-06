import React, { useState } from "react";
import { millisToMinutesAndSeconds } from "../services/functions";
import { useGetSearchResultsQuery } from "../services/YoutubeSearchApi";
import YoutubePlayer from "./YoutubePlayer";

// import playIcon from "./heroIcons/playIcon";

function Track({ count, image, title, album, artist, duration }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const songDuration = millisToMinutesAndSeconds(duration);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="flex flex-col">
      <div
        className="mx-8 grid grid-cols-5 hover:bg-zinc-700 cursor-pointer "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMouseClick}
      >
        <div className="col-span-2 flex items-center pt-5 pb-2">
          <div className="w-8 flex items-center">
            {isHovered ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-200 mx-1 mt-[-10px]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <p className="text-sm text-zinc-200 font-semibold mx-3">
                {count}
              </p>
            )}
          </div>
          <div className="flex ">
            <img
              src={image.url}
              alt="album image"
              className="h-8 w-8 my-[-3px]"
            />
            <p className="text-sm text-zinc-200 font-semibold mx-3">{title}</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center pt-5 pb-2">
          <p className="text-sm text-zinc-200 font-semibold mx-3">{album}</p>
        </div>
        <div className="col-span-1 flex items-center pt-5 pb-2">
          <p className="text-sm text-zinc-200 font-semibold mx-3">{artist}</p>
        </div>
        <div className="col-span-1 flex items-center pt-5 pb-2">
          <p className="text-sm text-zinc-200 font-semibold mx-3">
            {songDuration}
          </p>
        </div>
      </div>
      {isClick ? <YoutubePlayer title={title} artist={artist} /> : null}
    </div>
  );
}

export default Track;
