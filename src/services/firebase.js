import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCardsFirebase = async () => {
  const data = collection(db, "90s Rock Images");
  const response = await getDocs(data);
  const cards = response.docs.map((card) => ({
    ...card.data(),
    docId: card.id,
  }));
  return cards;
};
