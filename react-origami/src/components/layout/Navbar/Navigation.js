import React, { Component } from "react";
import NavigationItem from "./NavigationItem"

class Navigation extends Component {
    state = {
        links: [
          {
            id: "1",
            nav_link :"Going to 1"
          },
          {
            id: "2",
            nav_link :"Going to 2"
          },
          {
            id: "3",
            nav_link :"Going to 3"
          },
          {
            id: "4",
            nav_link :"Going to 4"
          },
          {
            id: "5",
            nav_link :"Going to 5"
          },
          {
            id: "6",
            nav_link :"Going to 6"
          },
          {
            id: "7",
            nav_link :"Going to 7"
          },
          {
            id: "8",
            nav_link :"Going to 8"
          },
          {
            id: "9",
            nav_link :"Going to 9"
          },
          {
            id: "10",
            nav_link :"Going to 10"
          },
          {
            id: "11",
            nav_link :"Going to 11"
          },
        ],
      };
      render() {
        return (
          <nav className="Navigation">
          <ul>
                <img src="white-origami-bird.png " alt="img"/>            
                {this.state.links.map((link) => (
                <NavigationItem key={link.nav_link} link={link} />
            ))}
         </ul>               
        </nav>            
        );       
      }
    }

export default Navigation;
