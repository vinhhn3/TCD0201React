import React, { Component, useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const { users, searchUsers, clearUsers } = githubContext;
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText("");
  };

  const clearButton = (e) => {
    console.log("Clear button clicked ...");
    clearUsers();
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search User ..."
          onChange={onChange}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 ? (
        <button onClick={clearButton} className="btn btn-light btn-block">
          Clear
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
