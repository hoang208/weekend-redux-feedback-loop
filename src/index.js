import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

//Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Feeling Rating
const feeling = (state = 0, action) => {
  if (action.type === "ADD_FEELING") {
    return state + action.payload;
  }
  if (action.type === "DELETE_FEELING") {
    return 0;
  }
  if (action.type === "RESET") {
    return 0
  }

  return state;
};

//Understanding Rating
const understanding = (state = 0, action) => {
  if (action.type === "ADD_UNDERSTANDING") {
    return state + action.payload;
  }
  if (action.type === "DELETE_UNDERSTANDING") {
    return 0;
  }
  if (action.type === "RESET") {
    return 0
  }

  return state;
};

//Supported Rating
const supported = (state = 0, action) => {
  if (action.type === "ADD_SUPPORTED") {
    return state + action.payload;
  }
  if (action.type === "DELETE_SUPPORTED") {
    return 0;
  }
  if (action.type === "RESET") {
    return 0
  }

  return state;
};

//Comment
const comment = (state = [], action) => {
  if (action.type === "ADD_COMMENT") {
    return action.payload;
  }
  if (action.type === "DELETE_COMMENT") {
    return [];
  }
  if (action.type === "RESET") {
    return [];
  }

  return state;
};

const feedbackList = (state = [], action) => {
    if (action.type === "GET_FEEDBACK") {
      return action.payload;
    }
  
    return state;
  };

// Store
const storeInstance = createStore(
  combineReducers({
    feeling,
    understanding,
    supported,
    comment,
    feedbackList
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 
           Wrap our App in a Provider, this makes Redux available in
           our entire application
          */}
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
