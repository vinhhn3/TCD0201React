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
import axios from "axios";

const GithubState = (props) => {
  const initialState = {
    users: [],
    showLoading: false,
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  // Set Loading to True
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Clear Users
  const clearUsers = async () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Get a Single User
  const getUser = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  // Get Repos
  const getRepos = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        showLoading: state.showLoading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
