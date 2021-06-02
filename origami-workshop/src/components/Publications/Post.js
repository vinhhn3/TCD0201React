import React from 'react';
import PropTypes from 'prop-types';
import "../../App.css";
import bird from "../../img/blue-origami-bird.png"

Post.propTypes = {
    posts: PropTypes.array
};

Post.defaultProps = {
    posts: []
}

function Post(props) {
    const {posts} = props;
    return (
        posts.map((post)=>(
            <div key={post.id} className="Post">
                <img src={bird} alt="a small bird"/>
                <p>{post.content}</p>
                <div>
                    <span>
                        <small>Author: </small> 
                        {post.author}
                    </span>
                </div>
            </div>
        ))
    );
}

export default Post;