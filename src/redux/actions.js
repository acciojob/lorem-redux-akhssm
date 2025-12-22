export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    setTimeout(() => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title:
              "Title :Loading tiltes",
            body:
              "Body :Loading Body"
          },
          {
            title:
              "Title :Loading tiltes",
            body:
              "Body :Loading Body"
          },
          {
            title:
              "Title :Loading tiltes",
            body:
              "Body :Loading Body"
          }
        ]
      });
    }, 1000);
  };
};
