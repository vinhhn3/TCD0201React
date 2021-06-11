import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        showLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        showLoading: true,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
