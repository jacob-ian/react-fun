import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const animals = [
  { name: "John", image: "images/john.jpg" },
  { name: "George", image: "images/george.png" },
  { name: "Fred", image: "images/fred.jpg" },
];

ReactDOM.render(
  <React.StrictMode>
    <App animals={animals} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
