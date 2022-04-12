import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/mainPage";
import MusicPage from "../components/MusicPage";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import * as ROUTES from "../constants/routes";

function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col">
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route exact path={ROUTES.SIGNUP}>
          <Signup />
        </Route>
        <Route exact path={ROUTES.DASHBOARD}>
          <MainPage />
        </Route>
        <Route exact path={ROUTES.MUSIC}>
          <MusicPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
