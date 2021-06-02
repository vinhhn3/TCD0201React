import React, { Component } from "react";
import logo from "/Users/Minh Vu/Desktop/reactjs/my-app/src/image/white-origami-bird.png";
export default class NavbarItems extends Component {
  render() {
    return (
      <div >
        <nav className="Navigation" >
          <img src={logo} alt="" />
         
            <ul className="listItem">
              <a4>Going to 1</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 2</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 3</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 4</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 5</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 6</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 7</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 8</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 9</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 10</a4>
            </ul>
            <ul className="listItem">
              <a4>Going to 11</a4>
            </ul>
          </nav>
      </div>
    );
  }
}
