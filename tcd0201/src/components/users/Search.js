import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    // console.log(this.state.text);
    this.setState({ text: "" });
  };

  clearButton = (e) => {
    console.log("Clear button clicked ...");
    this.props.clearUsers();
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search User ..."
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.users.length > 0 ? (
          <button
            onClick={this.clearButton}
            className="btn btn-light btn-block"
          >
            Clear
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Search;
