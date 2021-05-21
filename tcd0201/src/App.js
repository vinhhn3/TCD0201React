import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="TCD0201React" />
        <UserItem />
      </div>
    );
  }
}

export default App;
