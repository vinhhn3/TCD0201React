import React from 'react';
import logo3 from '../../img/logo3.png';
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer(props) {
    const loginStatus = useSelector(state => state.login.loginStatus);

    return (
        <footer className="Footer" >
            <ul>
                <li className="listItem" >
                    <Link to="/">Post</Link>
                </li>

                <li className="listItem">
                    <Link to="/thoughts">Thoughts</Link>
                </li>

                {loginStatus === false
                    && <li className="listItem">
                        <Link to="/register">Register</Link>
                    </li>
                }

                {loginStatus === false
                    ? <li className="listItem">
                        <Link to="/login">Login</Link>
                    </li>
                    : <></>
                }

                {loginStatus === true
                    && <li className="listItem">
                        <Link to="/profile">Profile</Link>
                    </li>
                }

                <li className="listItem" onClick={() => scroll.scrollToTop()}>
                    <img src={logo3} alt="img" />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;