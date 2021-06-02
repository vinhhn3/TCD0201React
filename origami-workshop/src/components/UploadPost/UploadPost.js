import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "../../App.css";

UploadPost.prototype = {
    executeUpload: PropTypes.func
};



function UploadPost(props) {
    const {executeUpload} = props;
    const[post, setPost] = useState([
        {
            description:""
        }
    ])

    const onChange = (e) =>{
        setPost({description: e.target.value})
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        executeUpload(post)
    }

    return (
        <div>
            <h1>Share your thoughts...</h1>
            <form onSubmit={onSubmit} >
                <textarea 
                    type="text"
                    name="text"
                    placeholder="Enter some thing ..."
                    onChange={onChange}
                    value={post.description}>
                </textarea>
                <button className="button" type="submit" value="Submit">Post</button>
            </form>
        </div>
    );
}

export default UploadPost;