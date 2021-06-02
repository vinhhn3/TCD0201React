import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Main from './components/Post/Main';
// import Navbar from './components/layout/Navbar'
// import Aside from './components/layout/Aside'
// import Footer from './components/layout/Footer';
import Thoughts from "./components/Thoughts/Thoughts"
import RegisterForm from "./components/Register/RegisterForm"
import LoginForm from "./components/Login/LoginForm"
import Profile from "./components/Profile/Profile"
import Four0Four from './components/404/Four0Four';
import NavbarUL from './components/layout/Header/NavbarUL'
import FooterUL from './components/layout/Footer/FooterUL'
import AsideUL from './components/layout/Aside/AsideUL'

//const Main = lazy(() => import('./components/Post/Main'));
//const Thoughts = lazy(() => import('./components/Thoughts/Thoughts'));

function App() {

  return (
    // <Suspense fallback={<p>Loading</p>}>
    <Router>
      <div className='App'>
        <NavbarUL />
        <div className='Container'>
          <AsideUL />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/thoughts" component={Thoughts} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/profile" component={Profile} />
            <Route path="" component={Four0Four} />
          </Switch>
        </div>
        <FooterUL />
      </div>
    </Router>
    // </Suspense>
  );
}

export default App;