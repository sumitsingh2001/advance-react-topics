const initialState = {
  loading: true,
  data: null,
  error: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
