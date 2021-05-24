import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import postService from "../services/post-service";



class Posts extends React.Component {
  state = {
    posts: null,
  };
  textInput = null;

  setTextInputRef = (element) => {
    debugger;
    this.textInput = element;
  };

  componentDidMount() {
    postService.load().then((posts) => {
      this.setState({ posts });
    });
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts ? (
          <div className="Posts">
            {posts.map((post) => (
              <Post
                key={post.id}
                imageUrl="/blue-origami-bird.png"
                imageAlt="alt"
                author=" Some Annonymous"
              >
                {post.body}
              </Post>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Posts;
