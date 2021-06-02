import React, {Component} from "react";
import Post from "./Post";

class Posts extends Component  {
    state = {
        posts: [
          {
            id: "1",
            content: "Each person must have the ideal partner for themselves. For me, my ideal partner is a good heart, honesty, and respect parents, hardworking, and educated. Moreover, she is also a pretty and attractive woman."
          },
          {
            id: "2",
            content: "When going to school, there are many subjects; however I still like literature the most. First, literature plays an important role in both education and daily life. Literature is not limit to a subject to be learnt at school. Furthermore, this subject teaches human about several aspects of life. From the very first step, student learns to write, read as well as describe things and people. Moreover, literature teaches one to be a responsible citizen and likeable personality. Literature is more than a subject, it’s an art and it can be applied directly into life such as: journalism, editor."
          },
          {
            id: "3",
            content: "For my conclusion, when we want to choose the ideal partner for us, we must know the background of her life and characteristics so that we can choose a suitable lover in the future"
          },
        ],
      };
      render() {
        return (
          <div>
            {this.state.posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        );
      }
    }
    export default Posts;