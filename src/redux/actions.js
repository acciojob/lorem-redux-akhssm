export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    setTimeout(() => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title:
              "A short Naration of Lorem Ipsum",
            body:
              "Body :Loading Body"
          }
        ]
      });
    }, 1000);
  };
};
