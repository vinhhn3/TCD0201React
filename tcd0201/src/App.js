import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    showLoading: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get("https://api.github.com/users");
    this.setState({ users: response.data, showLoading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="TCD0201React" />
        <Users users={this.state.users} showLoading={this.state.showLoading} />
      </div>
    );
  }
}

export default App;
