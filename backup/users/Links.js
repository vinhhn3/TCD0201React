import React, { useState } from 'react';


function Links(props) {
    const [linkTitle] = useState([
        {
            id: 1,
            title: 'Posts',
            to: '/'
        },
        {
            id: 2,
            title: 'Thoughts',
            to: '/thoughts'
        },
        {
            id: 3,
            title: 'Register',
            to: '/register'
        },
        {
            id: 4,
            title: 'Login',
            to: '/login'
        },
        {
            id: 5,
            title: 'Profile',
            to: '/profile'
        },
    ])

    return (
        <aside className="Aside" style={{ marginLeft: '10px' }}>
            <ul>
                <Aside links={linkTitle} />
            </ul>
        </aside>
    );
}

export default Links;