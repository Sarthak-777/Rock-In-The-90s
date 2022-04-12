import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Switch } from "antd";
import "antd/dist/antd.css";
import useDarkMode from "../hooks/use-darkMode";
import userContext from "../context/user";
import { signOut } from "firebase/auth";
import firebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import useUser from "../hooks/use-user";
import DropDownProfile from "./DropDownProfile";
import UploadImageModal from "./UploadImageModal";
import { listUploadFiles } from "../services/firebase";

function Navbar() {
  const { colorTheme, setTheme } = useDarkMode();
  const history = useHistory();

  const { user: loggedUserData } = useUser();
  const { user } = useContext(userContext);
  const { auth } = useContext(firebaseContext);

  const [dropDown, setDropDown] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  console.log(loggedUserData);

  useEffect(() => {
    async function getProfilePictureImage() {
      const [list] = await listUploadFiles(
        loggedUserData.userId,
        loggedUserData.username,
        loggedUserData.docId
      );
    }
    if (loggedUserData) {
      getProfilePictureImage();
    }
  }, [loggedUserData]);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      history.push(ROUTES.LOGIN);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(dropDown);

  return (
    <div className="h-28 container mx-auto">
      <div className="flex justify-between w-full dark:bg-darkModeBlue dark:border-b-4 dark:border-red-400 ">
        <div className="flex items-center">
          <div className="h-24 w-24 flex items-center bg-mainOrange rounded-full ml-10 my-5">
            <img
              src="/images/logo/logo.png"
              className="h-4/5 w-full object-cover"
              alt="main logo"
            />
          </div>
          <p className="mx-5 w-32 flex font-semibold text-mainOrange text-3xl dark:text-zinc-200 my-3">
            Rock in the 90s
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex">
            <div className="mt-3">
              {colorTheme === "light" ? (
                <Switch defaultChecked onChange={toggleDarkMode} />
              ) : (
                <Switch onChange={toggleDarkMode} />
              )}
            </div>
            <p className="text-mainOrange font-semibold text-2xl mx-3 cursor-pointer my-2 dark:text-zinc-200">
              Toggle 90s Mode
            </p>
          </div>
          <Link to="/">
            <p className="text-mainOrange font-semibold text-2xl mx-3 my-2 dark:text-zinc-200">
              Dashboard
            </p>
          </Link>
          <Link to="/music">
            <p className="text-mainOrange font-semibold text-2xl mx-3 my-2 dark:text-zinc-200">
              Music
            </p>
          </Link>
          {loggedUserData?.picture === "" ? (
            <img
              src="/images/logo/no-pp.png"
              className="h-10 w-10 rounded-full mx-3 cursor-pointer"
              alt="profile picture"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            />
          ) : (
            <img
              src={loggedUserData?.picture}
              className="h-10 w-10 rounded-full object-cover mx-3 cursor-pointer hover:scale-150 transition-all ease-in"
              alt="profile picture"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            />
          )}
          <p
            className="text-mainOrange font-semibold text-2xl mx-3 my-2 dark:text-zinc-200 cursor-pointer"
            onClick={handleLogOut}
          >
            Log Out
          </p>
        </div>
      </div>
      <DropDownProfile
        userData={loggedUserData}
        display={dropDown}
        setDisplay={setDropDown}
        setImageModal={setImageModal}
      />
      <UploadImageModal show={imageModal} setShow={setImageModal} />
    </div>
  );
}

export default Navbar;
