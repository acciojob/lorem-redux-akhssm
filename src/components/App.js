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
    }, 1500); 
  }, []);

  return (
    <div className="container">
      <h1>A short Naration of Lorem Ipsum</h1>

      {state.loading && <h4>Loading...</h4>}

      {!state.loading && (
        <ul>
          {state.posts.map((post, index) => (
            <li key={index}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
