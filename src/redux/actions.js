export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    setTimeout(() => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title:
              "Title :sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
              "Body :Loading Body"
          },
          {
            title:
              "Title :sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
              "Body :Loading Body"
          },
          {
            title:
              "Title :sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body:
              "Body :Loading Body"
          }
        ]
      });
    }, 1000);
  };
};
