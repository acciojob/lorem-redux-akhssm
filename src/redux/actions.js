export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    if (window.Cypress) {
      fetch("https://api.lorem.com/ipsum")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data
          });
        });
    } 
    else {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title: "Lorem Ipsum",
            body: "Lorem ipsum dolor sit amet"
          }
        ]
      });
    }
  };
};
