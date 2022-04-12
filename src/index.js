import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import firebaseContext from "./context/firebase";
import { app, db, auth } from "./lib/firebase";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <firebaseContext.Provider value={{ app, db, auth }}>
          <App />
        </firebaseContext.Provider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
