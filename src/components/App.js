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

  if(loading) return <p>Loading...</p>

  return (
    <div className="container">
       <h1 className="title">A short Naration of Lorem Ipsum</h1>
      <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>

      {/* {loading && (
        <>
          <h4>Loading...</h4>
          <ul>
            <li>
              <span>1</span>
              <p className="body">Body :Loading Body</p>
            </li>
          </ul>
        </>
      )} */}

      {/* {!loading && (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              <h1 className="title">{post.title}</h1>
              <p className="body">{post.body}</p>
            </li>
          ))}
        </ul>
      )} */}

      <ul>
        
            <li >
              <h2>{posts[0].title}</h2>
              <p>{posts[0].body}</p>
            </li>
      
        </ul>
    </div>
  );
};

{/*  */}

export default App;
