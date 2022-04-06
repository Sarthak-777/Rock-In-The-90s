import React from "react";

function SingleCard({ card, user }) {
  return (
    <div className="grid-span-1 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={user.picture.medium}
            className="h-10 w-10 rounded-full"
            alt="profile pic"
          />
          <p className="text-zinc-400 text-lg font-semibold mx-5">
            {user.name.first} {user.name.last}
          </p>
        </div>
        <div className="p-2 bg-secondaryOrange rounded-lg dark:bg-darkModeBlue">
          <p className="text-zinc-100 font-semibold ">{card.date}</p>
        </div>
      </div>
      <div className="h-[350px]">
        <img
          src={card.src}
          className="w-full h-full object-contain hover:scale-125 transition-all ease-in"
        />
      </div>
      <div className="w-full min-h-20 bg-secondaryOrange rounded-lg my-5 flex items-center justify-center dark:bg-darkModeBlue">
        <p className="text-zinc-100 font-semibold text-lg px-2">
          {card.Description}
        </p>
      </div>
    </div>
  );
}

export default SingleCard;
