import React from 'react';
import PropTypes from 'prop-types';
import Logo2 from '../../img/logo2.png';

Post.propTypes = {
    posts: PropTypes.array
};

Post.defaultProps = {
    posts: []
}

function Post(props) {

    const { posts } = props;

    return (
        posts.map(post => (
            <div className="Post" key={post._id} id={post._id} >
                <img src={Logo2} alt="img"></img>
                <p>
                    {post.description}
                </p>
                <div>
                    <span>
                        <small>Author: </small>
                        {post.author.username}
                    </span>
                </div>
            </div>
        ))
    );
}

export default Post;