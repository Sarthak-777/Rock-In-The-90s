import { useContext, useEffect, useState } from "react";
import firebaseContext from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";
// import { listenerCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";

function useAuthListener() {
  const [user, setUser] = useState();
  const { app, auth } = useContext(firebaseContext);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => listener();
  }, [app, auth]);
  return { user };
}

export default useAuthListener;
