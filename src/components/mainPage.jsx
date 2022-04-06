import React from "react";
import useCards from "../hooks/use-cards";
import SingleCard from "./singleCard";
import { useGetFifteenUsersQuery } from "../services/randomUsersApi";
import Youtube from "react-youtube";

function MainPage() {
  const { cards } = useCards();
  const { data, isFetching } = useGetFifteenUsersQuery();

  if (isFetching) {
    return (
      <p className="container mx-auto text-zinc-400 font-semibold text-2xl my-20">
        Loading...
      </p>
    );
  }
  let count = 0;

  return (
    <div className="container mx-auto my-20 ">
      <div className="grid grid-cols-4 gap-16 pb-20">
        {cards &&
          cards.map((card) => {
            return (
              <SingleCard
                key={card.docId}
                card={card}
                user={data.results[count++]}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MainPage;
