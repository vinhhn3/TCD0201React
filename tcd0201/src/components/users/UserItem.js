import React, { Component } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className="btn btn-primary btn-sm">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
