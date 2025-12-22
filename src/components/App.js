import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import "../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <div>
       <h2 className="title">{posts?.title}</h2>
        <p className="body">{posts?.body}</p>
    </div>
  );
};

export default App;
