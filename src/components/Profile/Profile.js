import React, { useEffect, useState } from 'react';
import origamiApi from '../.././api/origamiApi'
import userApi from '../.././api/userApi'
import Post from '../Post/Post';
import MineProfile from './MineProfile';

function Profile(props) {
    const [postList, setPostList] = useState([])
    const [mineProfile, setMineProfile] = useState({})
    const [numOfPosts, setNumOfPosts] = useState('')

    useEffect(() => {
        async function getMinePostList() {
            try {
                const params = { limit: 3 }
                const response = await origamiApi.minePosts(params)
                console.log(response)

                setPostList(response)
            } catch (error) {
                console.log('Fail: ', error.message);
            }
        }
        getMinePostList()
    }, []);

    useEffect(() => {
        async function getMineProfile() {
            try {
                const response = await userApi.mineProfile()
                console.log(response)

                setMineProfile(response)
                setNumOfPosts(response.posts.length)

            } catch (error) {
                console.log('Fail: ', error.message);
            }
        }
        getMineProfile()
    }, [])


    return (
        <div className='Profile'>
            <MineProfile mineProfile={mineProfile} numOfPosts={numOfPosts} />
            <div>
                <h2>3 of your recent posts</h2>
                <Post posts={postList} />
            </div>
        </div>
    );
}

export default Profile;