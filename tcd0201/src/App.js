import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./components/users/User";
import DemoHook from "./hooks/DemoHook";
import GithubState from "./context/github/GithubState";
import Home from "./components/users/Home";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/demohook" component={DemoHook} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props} // spread operator
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
