import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./components/users/User";
import DemoHook from "./hooks/DemoHook";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showLoading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  // Search User
  // const searchUsers = async (text) => {
  //   // this.setState({ showLoading: true });
  //   setLoading(true);
  //   const response = await axios.get(
  //     `https://api.github.com/search/users?q=${text}`
  //   );
  //   // this.setState({ users: response.data.items, showLoading: false });
  //   setUsers(response.data.items);
  //   setLoading(false);
  // };

  // Clear Users from State
  const clearUsers = async () => {
    // this.setState({ users: [] });
    setUsers([]);
  };

  // Get a Single User
  const getUser = async (username) => {
    // this.setState({ showLoading: true });
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    // this.setState({
    //   user: response.data,
    //   showLoading: false,
    // });
    setUser(response.data);
    setLoading(false);
  };

  // Get Repos
  const getRepos = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    // this.setState({
    //   repos: response.data,
    //   showLoading: false,
    // });
    setRepos(response.data);
    setLoading(false);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="TCD0201React" />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search clearUsers={clearUsers} />
                    <Users users={users} showLoading={showLoading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/demohook" component={DemoHook} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props} // spread operator
                    getUser={getUser}
                    getRepos={getRepos}
                    user={user}
                    repos={repos}
                    showLoading={showLoading}
                  />
                )}
              />
              <Route path="" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
