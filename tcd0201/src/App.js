import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    showLoading: false,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get(
  //     "https://api.github.com/search/users?q=vinh"
  //   );
  //   console.log(response.data.items);
  //   this.setState({ users: response.data.items, showLoading: false });
  // }

  searchUsers = async (text) => {
    this.setState({ showLoading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: response.data.items, showLoading: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar title="TCD0201React" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users
            users={this.state.users}
            showLoading={this.state.showLoading}
          />
        </div>
      </div>
    );
  }
}

export default App;
