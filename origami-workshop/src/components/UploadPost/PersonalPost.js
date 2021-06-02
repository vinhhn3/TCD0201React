import React from 'react';
import PropTypes from 'prop-types';
import "../../App.css";
import bird from "../../img/blue-origami-bird.png"

PersonalPost.propTypes = {
    personalList: PropTypes.array
};
PersonalPost.defaultProps = {
    personalList: []
}

function PersonalPost(props) {
    const {personalList} = props;
    return (
        <div>
            <h2>Last three posts on your wall</h2>
            {personalList.map((post)=>(
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
            ))}
        </div>
    );
}

export default PersonalPost

