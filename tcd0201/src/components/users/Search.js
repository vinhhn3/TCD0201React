import React, { Component, useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    // console.log(e.target.value);
    // this.setState({ text: e.target.value });
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchUsers(text);
    // console.log(this.state.text);
    // this.setState({ text: "" });
    setText("");
  };

  const clearButton = (e) => {
    console.log("Clear button clicked ...");
    props.clearUsers();
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
      {props.users.length > 0 ? (
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
