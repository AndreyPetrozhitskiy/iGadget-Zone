import "./style/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import dropdowns from "./Data/data";
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));
const defaultState = dropdowns;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(reducer);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
