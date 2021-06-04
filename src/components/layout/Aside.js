import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Aside() {
    const loginStatus = useSelector(state => state.login.loginStatus);

    return (
        <aside className="Aside">
            <ul>
                <li className="listItem">
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
                    && <li className="listItem">
                        <Link to="/login">Login</Link>
                    </li>
                }

                {loginStatus === true
                    && <li className="listItem">
                        <Link to="/profile">Profile</Link>
                    </li>
                }
            </ul>
        </aside>
    );
}

export default Aside;