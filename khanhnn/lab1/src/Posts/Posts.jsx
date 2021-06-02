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
                author=" Some Anonymous"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, remaining essentially 
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.
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
