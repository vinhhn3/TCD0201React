import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log("Component did mount");
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="TCD0201React" />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
