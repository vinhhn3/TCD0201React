import React, { Component } from "react";
import logo from "/Users/Minh Vu/Desktop/reactjs/my-app/src/image/blue-origami-bird-flipped.png";
export default class FooterItem extends Component {
  render() {
    return (
      <div>
        <footer className="Footer">
          <ul>
            <li className="listItem">
              <a4>Going to 1</a4>
            </li>
            <li className="listItem">
              <a4>Going to 2</a4>
            </li>
            <li className="listItem">
              <a4>Going to 3</a4>
            </li>
            <li className="listItem">
              <a4>Going to 4</a4>
            </li>
            <li className="listItem">
              <a4>Going to 5</a4>
            </li>
            <li className="listItem">
              <a4>Going to 6</a4>
            </li>
            <li className="listItem">
              <a4>Going to 7</a4>
            </li>
            <li className="listItem">
              <a4>Going to 8</a4>
            </li>
            <li className="listItem">
              <a4>Going to 9</a4>
            </li>
            <li className="listItem">
              <a4>Going to 10</a4>
            </li>
            <li className="listItem">
              <a4>Going to 11</a4>
            </li>

            <img src={logo} alt="" />
          </ul>
        </footer>
      </div>
    );
  }
}
