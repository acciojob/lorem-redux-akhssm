import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";

const initialState = {
  loading: false,
  title: "",
  body: "",
  error: ""
};

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };

    case FETCH_SUCCESS:
      return {
        loading: false,
        title: action.payload.title,
        body: action.payload.body,
        error: ""
      };

    case FETCH_FAILURE:
      return {
        loading: false,
        title: "",
        body: "",
        error: action.payload
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE };
