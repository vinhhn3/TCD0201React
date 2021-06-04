import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

MineProfile.propTypes = {
    mineProfile: PropTypes.object,
    numOfPosts: PropTypes.any,
    onClick: PropTypes.func
};

MineProfile.defaultProps = {
    mineProfile: [],
    numOfPosts: '',
    onClick: null
}

function MineProfile(props) {
    const { mineProfile, numOfPosts, onClick } = props;
    const loginStatus = useSelector(state => state.login.loginStatus);

    function handleOnClick() {
        if (loginStatus === false) return
        onClick()
    }

    return (
        <>
            <img src='https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png' alt='profile-icon' />
            <div className='personal-info'>
                <p>
                    <span>Email: </span>
                    {mineProfile.username}
                </p>
                <p>
                    <span>Post: </span>
                    {numOfPosts}
                </p>
            </div>

            {loginStatus === true
                &&
                <button
                    onClick={handleOnClick}
                >
                    Logout
                </button>
            }
        </>
    );
}

export default MineProfile;