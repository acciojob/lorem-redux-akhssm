export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    setTimeout(() => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title: "Title :Loading tiltes",
            body: "Lorem ipsum dolor sit amet"
          }
        ]
      });
    }, 1000);
  };
};
