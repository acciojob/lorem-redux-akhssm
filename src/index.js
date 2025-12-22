// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store  from "./redux/store";
// import App from "./components/App";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );





const initialState = {
  loading: false,
  posts: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload
      };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
