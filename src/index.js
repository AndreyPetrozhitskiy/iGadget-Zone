import "./style/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import dropdowns from "./store/data";
import login from "./store/Auth"
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));
const defaultState = dropdowns;
const userState = login;

  



const userReducer = (state = userState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(productReducer);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
