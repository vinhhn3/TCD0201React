import React from "react";
import UserItem from "./UserItem";

const Users = ({ users, showLoading }) => {
  if (showLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div style={userStyle}>
      {users.map((user) => (
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
