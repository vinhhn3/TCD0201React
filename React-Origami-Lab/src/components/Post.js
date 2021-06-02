import React from 'react';
import PropTypes from 'prop-types';
import Logo2 from '../img/blue-origami-bird.png';

Post.propTypes = {
    posts: PropTypes.array
};

Post.defaultProps = {
    posts: []
}

function Post(props) {

    const {posts} = props;

    return (
        posts.map(post => (
            <div className="Post" key={post.id} id={post.id} >
                <img src={Logo2} alt="img"></img>
                <p>
                    {post.content}
                </p>
                <div>
                    <span>
                    <small>Author: </small>
                        {post.authorName}
                    </span>
                </div>
            </div>
        ))
    );
}

export default Post;