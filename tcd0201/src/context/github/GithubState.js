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
    // this.setState({ showLoading: true });
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    // this.setState({ users: response.data.items, showLoading: false });
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
    setLoading(false);
  };

  // Set Loading to True
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Clear Users
  const clearUsers = async () => {
    // this.setState({ users: [] });
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Get a Single User
  const getUser = async (username) => {
    // this.setState({ showLoading: true });
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    dispatch({
      type: GET_USER,
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
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
