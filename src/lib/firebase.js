import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxfNh8A_CfpcXln8477Pr6t2kxEPhoVf4",
  authDomain: "back-to-the-90s.firebaseapp.com",
  projectId: "back-to-the-90s",
  storageBucket: "back-to-the-90s.appspot.com",
  messagingSenderId: "1098216840493",
  appId: "1:1098216840493:web:73dbc0b624154fd29bc7a4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
