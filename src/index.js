import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} store={store} state={state} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
