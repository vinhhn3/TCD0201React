import React, { Component, useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = (props) => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setText("");
  };

  const clearButton = (e) => {
    console.log("Clear button clicked ...");
    githubContext.clearUsers();
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
      {githubContext.users.length > 0 ? (
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
