// export default Navbar;
import React, { useState } from 'react';
import NavbarLI from './NavbarLI';
import '../../../App.css';
import logo from '../../../img/logo1.png'

function Navbar(props) {
    const [navbarTitle] = useState([
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
        // {
        //     id: 4,
        //     title: 'Login',
        //     to: '/login'
        // },
        {
            id: 5,
            title: 'Profile',
            to: '/profile'
        },
    ]);


    return (
        <nav className="Navigation">
            <ul>
                <li className="listItem">
                    <img src={logo} alt="img" style={{ width: '64%' }} />
                </li>
                <NavbarLI links={navbarTitle} />
            </ul>
        </nav>
    );
}

export default Navbar;