import React, { Component } from 'react';
import img from '.././blue-origami-bird.png';


class Post extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                {data && data.map(item => {
                    return (
                        <div className='Post' key={item._id}>
                            <img src={img} alt="img" />
                            <p className='description'>{item.description}</p>
                            <div>
                                <span>
                                    <small>Author:</small>{item.author === null ? "anonymous" : item.author}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )


    }
}

export default Post;
