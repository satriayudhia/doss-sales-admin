import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "typeface-roboto";
import { AppContextProvider } from "./configs/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
