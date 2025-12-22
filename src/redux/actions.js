// export const fetchStart = () => {
//   return {
//     type: "FETCH_START"
//   };
// }

// export const fetchSuccess = (posts) => {
//   return {
//     type: "FETCH_SUCCESS",
//     payload: posts
//   };
// }

// export const fetchError = (error) => {
//   return {
//     type: "FETCH_ERROR",
//     payload: error
//   };
// }

// export const fetchPosts = () =>  (dispatch) => {
//   dispatch(fetchStart());

//   //small delay to simulate loading state
//   setTimeout(() => {

//   dispatch(
//     fetchSuccess({
//       title : "Lorem Ipsum",
//       body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
// })
//   )
// }, 1000);

// }







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
          title: "Lorem Ipsum",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
      ])
    );
  }, 1000);
};
