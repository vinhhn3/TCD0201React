import React from 'react';
import './Aside.css';
import Link from '../shared/Link/Link';

function Aside() {
  return <aside className="Aside">
    <ul>
      <Link to="/create-posts">Posts</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/">########</Link>
      <Link to="/">########</Link>
      <Link to="/">########</Link>
      <Link to="/">########</Link>
      <Link to="/">########</Link>
      <Link to="/">########</Link>
      <Link to="/">########</Link>
    </ul>
  </aside>;
};

export default Aside;