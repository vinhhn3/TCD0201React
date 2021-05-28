import React from 'react';

function Post({ url, alt, children, author }) {
    return(
        <div className="Post">
            <img src={url} alt={alt} />
            <p className="description">{children}</p>
            <div>
                <span>
                    <small>Author: </small> {author}
                </span>
            </div>
        </div>
    )
}

export default Post;