import React from 'react';
import PropTypes from 'prop-types';

MineProfile.propTypes = {
    mineProfile: PropTypes.object,
    numOfPosts: PropTypes.any
};

MineProfile.defaultProps = {
    mineProfile: [],
    numOfPosts: ''
}

function MineProfile(props) {
    const { mineProfile, numOfPosts } = props;

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
        </>
    );
}

export default MineProfile;