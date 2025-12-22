import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import "../styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <h4>A short Naration of Lorem Ipsum</h4>
      {loading && <h4>Loading...</h4>}

      {!loading && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <span>{index + 1}</span>

              <h1 className="title">{post.title}</h1>
              <p className="body">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
