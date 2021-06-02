import React, { Component } from "react";

class Post extends Component {
  render() {
    const { content } = this.props.post;

    return (
      <div className="Posts" >
            <div className="Post">
                <img src="blue-origami-bird.png " alt="img"/>
                <p>{content}</p>
            </div>
            <div>
                <span>
                    <small>Author:</small>
                    Some Anonymous
                </span>
            </div>
      </div>
    );
  }
}



export default Post;