import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/App.css";
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../index";

const App = () => {
  const dispatch = useDispatch();
  const { loading, title, body, error } = useSelector((state) => state);

  useEffect(() => {
    const fetchLorem = async () => {
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

    fetchLorem();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default App;
