import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="TCD0201React" />
        <Users />
      </div>
    );
  }
}

export default App;
