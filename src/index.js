import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 10 },
  { id: 2, message: "It's my first post", likesCount: 12 },
];

let dialogs = [
  { id: 1, name: "Artem" },
  { id: 2, name: "Daniel" },
  { id: 3, name: "Valera" },
  { id: 4, name: "Sanek" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi, hru?" },
  { id: 3, message: "Hi everyone" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
