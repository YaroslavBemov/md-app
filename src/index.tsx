import React, { createContext } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./routes/Router";

import RootStore from "./store/RootStore";
const store = new RootStore();
export const RootStoreContext = createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={store}>
      <Router />
    </RootStoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
