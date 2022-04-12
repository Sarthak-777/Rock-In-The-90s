import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import UploadImageModal from "./UploadImageModal";

function DropDownProfile({ userData, display, setDisplay, setImageModal }) {
  const handleProfilePicture = () => {
    setDisplay(false);
    setImageModal(true);
  };
  return (
    <div className={`fixed top-28 right-64 z-50 ${!display ? "hidden" : null}`}>
      <div className="h-[170px] w-[250px] rounded-lg bg-zinc-700">
        {/* <img src={userData.picture} alt="bg image" className=" w-full" /> */}
        <div className="flex mx-3 py-3 border-b border-zinc-400  items-center ">
          <img
            src={userData.picture}
            alt="profile picture"
            className="h-10 w-10 rounded-full "
          />
          <h1 className="font-semibold text-zinc-300 text-lg mx-5">
            {userData.username}
          </h1>
        </div>
        <div className="h-full w-full flex  justify-center">
          <button
            className="p-4 border-4 border-zinc-300 text-zinc-400 font-semibold hover:bg-zinc-600 h-14 w-46 my-5"
            onClick={handleProfilePicture}
          >
            Upload Profile Picture
          </button>
        </div>
      </div>
    </div>
  );
}

export default DropDownProfile;
