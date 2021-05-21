import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: 1,
    html_url: "https://github.com/defunkt",
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
  };
  render() {
    const { id, html_url, login, avatar_url } = this.state;

    return (
      <div className="card text-center">
        <img src={avatar_url} className="round-img" style={{ width: "60px" }} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-primary btn-sm">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
