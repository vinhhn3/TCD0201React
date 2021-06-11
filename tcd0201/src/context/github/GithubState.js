import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { useReducer } from "react";

const GithubState = (props) => {
  const initialState = {
    users: [],
    showLoading: false,
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        showLoading: state.showLoading,
        repos: state.repos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
