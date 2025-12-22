// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../redux/actions";
// import "../styles/App.css";

// const App = () => {
//   const dispatch = useDispatch();
//   const { loading, posts, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if(loading) return <p>Loading...</p>
//   if(error) return <p>Error: {error}</p>

//   return (
//     <div>
//        <h1 className="title">A short Naration of Lorem Ipsum</h1>
//       <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
// <ul></ul>
//        <h2 className="title">{posts?.title}</h2>
//         <p className="body">{posts?.body}</p>
//     </div>
//   );
// };

// export default App;


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
      {/* Intro text must ALWAYS render */}
      <h1 className="title">A short Naration of Lorem Ipsum</h1>

      <h4>
        Below Contains A title and Body gotten from a random API, Please take your
        time to Review
      </h4>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p>Error: {error}</p>}

      {/* Posts list */}
      <ul>
        {posts &&
          posts.map((post) => (
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
