import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";

/* ---------------- REDUX SETUP ---------------- */

// Initial State
const initialState = {
  loading: false,
  title: "",
  body: "",
  error: ""
};

// Action Types
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

// Reducer
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

// Async Action (Thunk)
export const fetchLorem = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REQUEST });

    try {
      const res = await fetch("https://api.lorem.com/ipsum");
      const data = await res.json();

      dispatch({
        type: FETCH_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILURE,
        payload: err.message
      });
    }
  };
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));

/* ---------------- RENDER ---------------- */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
