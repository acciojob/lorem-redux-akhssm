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
              "Body :quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
          }
        ]
      });
    }, 1000);
  };
};
