import { useContext, useEffect, useState } from "react";
import userContext from "../context/user";
import { getUserDataByUserId } from "../services/firebase";

function useUser() {
  const [loggedUser, setLoggedUser] = useState({});
  const { user } = useContext(userContext);
  useEffect(() => {
    async function getUserData() {
      const [response] = await getUserDataByUserId(user?.uid);
      setLoggedUser(response);
    }
    if (user?.uid) {
      getUserData();
    }
  }, [user]);
  return {
    user: loggedUser,
  };
}

export default useUser;
