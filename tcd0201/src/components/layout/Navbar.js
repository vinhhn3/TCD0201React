import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>GitHub React Finder</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/demohook">Demo React Hook</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
