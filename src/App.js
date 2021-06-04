import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React from 'react';
import Main from './components/Post/Main';
import Thoughts from "./components/Thoughts/Thoughts"
import RegisterForm from "./components/Register/RegisterForm"
import LoginForm from "./components/Login/LoginForm"
import Profile from "./components/Profile/Profile"
import Four0Four from './components/404/Four0Four';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Aside from './components/layout/Aside'
import { useSelector } from 'react-redux';

function App() {
  const loginStatus = useSelector(state => state.login.loginStatus);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Container'>
          <Aside />
          <Switch>
            {loginStatus === false && <Redirect exact from="/profile" to="/login" />}
            {loginStatus === true && <Redirect exact from="/login" to="/" />}
            {loginStatus === true && <Redirect exact from="/register" to="/" />}

            <Route exact path="/" component={Main} />
            <Route exact path="/thoughts" component={Thoughts} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/profile" component={Profile} />
            <Route path="" component={Four0Four} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;