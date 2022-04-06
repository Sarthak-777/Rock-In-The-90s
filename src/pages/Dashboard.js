import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/mainPage";
import MusicPage from "../components/MusicPage";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/music">
          <MusicPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
