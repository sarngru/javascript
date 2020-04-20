import C from "../constants";

export const loading = (state = false, action) => {
  action.type === C.TOGGLE_LOADING ? Boolean(action.payload) : state;
};

export const user = (state = null, action) =>
  action.type === C.CREATE_USER ? action.payload : state;

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return state.concat(action.payload);
    case C.CLEAR_ERROR:
      return state.filter((i, index) => index !== action.payload);
    default:
      return state;
  }
};