import React, { useState } from 'react';
import AsideLI from '../Aside/AsideLI';


function AsideUL(props) {
    const [asideTitle] = useState([
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
    ]);

    return (
        <aside className="Aside" >
            <ul>
                <AsideLI links={asideTitle} />
            </ul>
        </aside>
    );
}

export default AsideUL;