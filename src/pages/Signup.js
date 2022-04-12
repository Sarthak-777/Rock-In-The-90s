import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import firebaseContext from "../context/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateSignUpProfile } from "../services/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { auth, db } = useContext(firebaseContext);

  const history = useHistory();

  const handleSignup = async () => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateSignUpProfile(createUser, username);
      history.push(ROUTES.DASHBOARD);
      setError("");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  return (
    <div className="grow mt-7 bg-brown">
      <div className=" flex justify-center">
        <div className=" my-24 w-96 bg-zinc-100 rounded-xl">
          <div className="my-14 flex flex-col">
            <div className="flex">
              <div className="w-2 bg-mainOrange" />
              <h1 className="mx-8 font-semibold text-2xl text-mainOrange mt-2">
                SIGNUP
              </h1>
            </div>
            {error && (
              <p className="text-red-400 text-sm font-semibold mx-auto">
                {error}
              </p>
            )}
            <input
              type="text"
              className="p-5 mx-10 my-2 shadow-lg bg-transparent w-4/5 placeholder:italic"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <input
              type="text"
              className="p-5 mx-10 my-2 shadow-lg bg-transparent w-4/5 placeholder:italic"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              className="p-5 mx-10 my-2 shadow-lg bg-transparent w-4/5 placeholder:italic"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <div className="flex flex-col justify-center items-center my-4">
              <button
                className="rounded-lg p-4 text-mainOrange font-semibold shadow-md active:bg-zinc-200 focus:outline-none focus:ring"
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <h1 className="my-4 font-light  text-zinc-600">OR</h1>
              <Link to={ROUTES.LOGIN}>
                <h1 className="font-semibold text-lg text-mainOrange cursor-pointer">
                  LOG IN
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
