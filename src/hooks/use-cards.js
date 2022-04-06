import { useEffect, useState } from "react";
import { getCardsFirebase } from "../services/firebase";

const useCards = () => {
  const [cards, setCards] = useState("");

  useEffect(() => {
    async function getDashboardCards() {
      const dashboardCards = await getCardsFirebase();
      setCards(dashboardCards);
    }
    getDashboardCards();
  }, []);

  return {
    cards,
  };
};

export default useCards;
