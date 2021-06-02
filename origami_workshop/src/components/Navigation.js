/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Navigation = function(props) {
  return (
    <nav className="Navigation" style={{position: 'fixed'}}>
        <ul>
            <li className="listItem">
            <img className="img_white" src="/images/white-origami.png" alt="origami"></img>
            </li>
            <li className="listItem">
                <a href="#">Post</a>
            </li>
            <li className="listItem">
                <a href="#">Register</a>
            </li>
            <li className="listItem">
                <a href="#">Login</a>
            </li>
            <li className="listItem">
                <a href="#">Profile</a>
            </li>
            <li className="listItem">
                <a href="#">#######</a>
            </li>
            <li className="listItem">
                <a href="#">#######</a>
            </li>
            <li className="listItem">
                <a href="#">#######</a>
            </li>
            <li className="listItem">
                <a href="#">#######</a>
            </li>
            <li className="listItem">
                <a href="#">#######</a>
            </li>
            <li className="listItem">
                <a href="#">#######</a>
            </li>
        </ul>
    </nav>
   
  )
}



export default Navigation;
