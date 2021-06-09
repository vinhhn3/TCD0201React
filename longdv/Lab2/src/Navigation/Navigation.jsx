import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';

function Navigation() {
  return <nav className="Navigation">
    <ul>
      <Link to="/">
        <img id="logo" src="/white-origami-bird.png" alt="my-app-logo" />
      </Link>
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
  </nav>;
};

export default Navigation;