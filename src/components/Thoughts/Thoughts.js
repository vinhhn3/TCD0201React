import React, { useEffect, useState } from 'react';
import CreateThoughtsForm from './CreateThoughtsForm';
import origamiApi from '../.././api/origamiApi'
import Post from '../Post/Post';

function Thoughts(props) {
    const [postList, setPostList] = useState([])
    const [isOk, setIsOk] = useState('0')

    useEffect(() => {
        async function getLatestPost() {
            try {
                const params = { limit: 3 };
                const response = await origamiApi.getPost(params)
                console.log('Get latest post successful: ', response)

                setPostList(response)
            } catch (error) {
                console.log('Fail: ', error);
            }
        }
        getLatestPost()
    }, [isOk])

    async function handleThoughtsFormSubmit(thoughtsValues) {
        console.log('Form submit: ', thoughtsValues)
        try {
            const response = await origamiApi.postThoughts(thoughtsValues)
            console.log('Post successful: ', response)

            setIsOk(isOk + 1)
        } catch (error) {
            console.log('Fail: ', error.message);
        }
    }

    return (
        <div className='Input'>
            <CreateThoughtsForm onThoughtsFormSubmit={handleThoughtsFormSubmit} />
            <div>
                <h2>Last 3 post on your wall</h2>
                <Post posts={postList} />
            </div>
        </div>
    );
}

export default Thoughts;