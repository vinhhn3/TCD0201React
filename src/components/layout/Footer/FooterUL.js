import React, { useState } from 'react';
import FooterLI from './FooterLI';
import logo3 from '../../../img/logo3.png'

function FooterUL(props) {
    const [footerTitle] = useState([
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
        <footer className="Footer">
            <ul>
                <FooterLI links={footerTitle} />
                <li className="listItem">
                    <img src={logo3} alt="img" />
                </li>
            </ul>
        </footer>
    );
}

export default FooterUL;