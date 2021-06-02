import React, { Component } from "react";


class UserItem extends Component {

    render() {
        const { html_url, login, avatar_url } = this.props.user;

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