import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import firebaseContext from "../context/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { auth } = useContext(firebaseContext);

  const history = useHistory();

  const handleLogin = async () => {
    try {
      const logInUser = await signInWithEmailAndPassword(auth, email, password);
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
                LOGIN
              </h1>
            </div>
            <input
              type="text"
              className="p-5 mx-10 my-4 shadow-lg bg-transparent w-4/5 placeholder:italic"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              className="p-5 mx-10 my-4 shadow-lg bg-transparent w-4/5 placeholder:italic"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <div className="flex flex-col justify-center items-center my-4">
              <button
                className="rounded-lg p-4 text-mainOrange font-semibold shadow-md active:bg-zinc-200 focus:outline-none focus:ring"
                onClick={handleLogin}
              >
                Log In
              </button>
              <h1 className="my-4 font-light  text-zinc-600">OR</h1>
              <Link to="/signup">
                <h1 className="font-semibold text-lg text-mainOrange cursor-pointer">
                  SIGN UP
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
