import React, { useEffect, useState } from 'react';
import Post from './Post';
import origamiApi from '../.././api/origamiApi'

function Main() {
    const [postList, setPostList] = useState([])

    useEffect(() => {
        async function getPostList() {
            try {
                const response = await origamiApi.getPost()
                console.log('Get post successful: ', response)

                setPostList(response)

            } catch (error) {
                console.log('Fail: ', error);
            }
        }
        getPostList();
    }, []);

    return (
        <main className='Main'>
            <h1>Publication</h1>
            <Post posts={postList} />
        </main>
    );
}

export default Main;