const initialState = {
  loading: true,
  posts: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload
      };

    case "FETCH_ERROR":
      return { ...state, loading: false };

    default:
      return state;
  }
};
