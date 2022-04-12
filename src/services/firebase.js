import { db, storage } from "../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  where,
  query,
  doc,
} from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  ref,
  uploadBytesResumable,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { isRejected } from "@reduxjs/toolkit";

export const getCardsFirebase = async () => {
  const data = collection(db, "90s Rock Images");
  const response = await getDocs(data);
  const cards = response.docs.map((card) => ({
    ...card.data(),
    docId: card.id,
  }));
  return cards;
};

export const updateSignUpProfile = async (createUser, username) => {
  const colRef = collection(db, "users");
  await addDoc(colRef, {
    userId: createUser.user.uid,
    username: username.toLowerCase(),
    favourites: [],
    picture: "",
  });
};

export const getUserDataByUserId = async (userId) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
  return data;
};

export const uploadFiles = (file, userId, username, docId, setProgress) => {
  if (!file) return;
  const storageRef = ref(storage, `/files/${userId}/${username}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog);
    },
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(
        async (url) =>
          await updateDoc(doc(db, "users", docId), {
            picture: url,
          })
      );
    }
  );
};

export const listUploadFiles = async (userId, username) => {
  const listRef = ref(storage, `/files/${userId}`);
  const listData = await listAll(listRef);
  const list = listData.items.map((item) => ({
    fullPath: item.fullPath,
    name: item.name,
  }));
  return list;
};
