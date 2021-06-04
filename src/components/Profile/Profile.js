import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import origamiApi from '../.././api/origamiApi'
import userApi from '../.././api/userApi'
import Post from '../Post/Post';
import MineProfile from './MineProfile';
import { loginStatusSuccessfully } from '../../actions/login';

function Profile(props) {
    const [postList, setPostList] = useState([])
    const [mineProfile, setMineProfile] = useState({})
    const [numOfPosts, setNumOfPosts] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies();

    const loginStatus = useSelector(state => state.login.loginStatus);
    console.log('Login Status: ', loginStatus)

    const dispatch = useDispatch();

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

    async function handleLogoutEvent() {
        try {
            const response = await userApi.logout()
            console.log(response)

            removeCookie("x-auth-token");

            //change state at redux
            const status = false
            const loginStatusAction = loginStatusSuccessfully(status)
            dispatch(loginStatusAction)

            window.location = '/';

        } catch (error) {
            console.log('Fail: ', error.message);
        }
    }

    return (
        <div className='Profile'>
            <MineProfile
                mineProfile={mineProfile}
                numOfPosts={numOfPosts}
                onClick={handleLogoutEvent}
            />
            <div>
                <h2>3 of your recent posts</h2>
                <Post posts={postList} />
            </div>
        </div>
    );
}

export default Profile;