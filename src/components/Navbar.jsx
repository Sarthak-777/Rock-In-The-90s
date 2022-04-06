import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import "antd/dist/antd.css";
import useDarkMode from "../hooks/use-darkMode";

function Navbar() {
  const { colorTheme, setTheme } = useDarkMode();
  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };
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
          <Link to="/">
            <p className="text-mainOrange font-semibold text-2xl mx-3 my-2 dark:text-zinc-200">
              Log Out
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
