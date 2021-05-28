import React from 'react';
import Post from './Post';

function Posts() {
    return (
        <div className="Posts">
            <Post url="/blue-origami-bird.png" alt="origami" author="Someone">
                Test Test Test 1
            </Post>
            <Post url="/blue-origami-bird.png" alt="origami" author="Someone">
                Test Test Test 2
            </Post>
            <Post url="/blue-origami-bird.png" alt="origami" author="Someone">
                Test Test Test 3
            </Post>
        </div>
    )
}

export default Posts;