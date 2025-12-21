import React, { useEffect, useReducer } from "react";
import "../styles/App.css";

const initialState = {
  loading: false,
  title: "",
  body: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return {
        loading: false,
        title: action.payload.title,
        body: action.payload.body
      };

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://api.lorem.com/ipsum")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data
        });
      })
      .catch(() => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            title: "Lorem Ipsum",
            body: "Lorem ipsum dolor sit amet"
          }
        });
      });
  }, []);

  return (
    <div className="container">
      <h2>Lorem Ipsum</h2>

      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{state.title}</h1>
          <p>{state.body}</p>
        </>
      )}
    </div>
  );
};

export default App;
