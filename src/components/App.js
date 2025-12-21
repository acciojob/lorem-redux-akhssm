import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../index";
import "../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, title, body, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default App;
