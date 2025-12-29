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

  return (
    <div>
      <h1 className="title">A short Naration of Lorem Ipsum</h1>

      {!loading && <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>}

      {loading &&  <li >
            <h2 className="title">Title :Loading titles</h2>
            <p className="body">Body :Loading Body</p>
          </li>}

      {error && <p>Error: {error}</p>}
      
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="title">{post.title}</h2>
            <p className="body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
