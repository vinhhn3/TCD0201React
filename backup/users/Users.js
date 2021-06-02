import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
    state = {
        users: [
            {
                id: "1",
                html_url: "https://github.com/defunkt",
                login: "defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            },
            {
                id: "2",
                html_url: "https://github.com/defunkt",
                login: "defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            },
            {
                id: "3",
                html_url: "https://github.com/defunkt",
                login: "defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            },
        ],
    };
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

export default Users;