import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";
import GithubState from "../../context/github/GithubState";

const Users = ({ showLoading }) => {
  const githubContext = useContext(GithubContext);
  if (showLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div style={userStyle}>
      {githubContext.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
