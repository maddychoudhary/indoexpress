import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import ContextApi from "./Global/ContextApi.js";
ReactDOM.render(
  <ContextApi>
    <App />
  </ContextApi>,
  document.getElementById("root")
);
