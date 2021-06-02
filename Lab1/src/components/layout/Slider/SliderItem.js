import React, { Component } from "react";
import logo from "/Users/Minh Vu/Desktop/reactjs/my-app/src/image/blue-origami-bird.png";
export default class SliderItem extends Component {
  render() {
    return (
      <div className="Container">
        <aside className="Aside">
          <ul>
            <li className="listItem">
              <a2>Going to 1</a2>
            </li>
            <li className="listItem">
              <a2>Going to 2</a2>
            </li>
            <li className="listItem">
              <a2>Going to 3</a2>
            </li>
            <li className="listItem">
              <a2>Going to 4</a2>
            </li>
            <li className="listItem">
              <a2>Going to 5</a2>
            </li>
            <li className="listItem">
              <a2>Going to 6</a2>
            </li>
            <li className="listItem">
              <a2>Going to 7</a2>
            </li>
            <li className="listItem">
              <a2>Going to 8</a2>
            </li>
            <li className="listItem">
              <a2>Going to 9</a2>
            </li>
            <li className="listItem">
              <a2>Going to 10</a2>
            </li>
            <li className="listItem">
              <a2>Going to 11</a2>
            </li>
          </ul>
        </aside>
        <main className="Main">
          <h1>
            Sooooooooooooo heading
          </h1>
          <div className="Posts">
            <div className="Post">
            <img src={logo} alt="Origami"/>
            <p className="description">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <div>
              <span>
                <small>Author:</small>
                Some anonymous
              </span>
            </div>
            </div>
          </div>
          </main>
      </div>
    );
  }
}
