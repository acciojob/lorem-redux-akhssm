import React, { useEffect, useReducer } from "react";
import "../styles/App.css";

const initialState = {
  loading: true,
  posts: []
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload
      };

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title: "Lorem Ipsum",
            body: "Lorem ipsum dolor sit amet"
          }
        ]
      });
    }, 500);
  }, []);

  return (
    <div className="container">
      <h2>A short Naration of Lorem Ipsum</h2>

      {state.loading && <h4>Loading...</h4>}

      <ul>
        {state.posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
