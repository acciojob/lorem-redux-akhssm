export const fetchStart = () => ({
  type: "FETCH_START"
});

export const fetchSuccess = (posts) => ({
  type: "FETCH_SUCCESS",
  payload: posts
});

export const fetchError = (error) => ({
  type: "FETCH_ERROR",
  payload: error
});

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchStart());

  setTimeout(() => {
    dispatch(
      fetchSuccess([
        {
          id: 1,
          title: "Title :Loading tiltes",
          body:
            "Body :quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      ])
    );
  }, 1000);
};

