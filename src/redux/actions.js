export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });

    setTimeout(() => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: [
          {
            title: "A short Naration of Lorem Ipsum",
            body: "Body :quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }
        ]
      });
    }, 1000);
  };
};
