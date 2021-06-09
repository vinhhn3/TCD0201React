import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer() {
  return <nav className="Footer">
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
      <Link to="/">
        <img id="logo" src="/blue-origami-bird-flipped.png" alt="my-app-logo" />
      </Link>
    </ul>
  </nav>;
};

export default Footer;