import React, { Component } from 'react';
import './App.css';
import './workshop-styles.css';
// import Home from './components/Home';
// import About from './components/About';
// import NotFound from './components/NotFound';
import Navigation from './components/Navigation'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter as Router} from "react-router-dom"


class App extends Component {

  state = {
    dataNav: []
  }
  componentDidMount() {
    this.handleNavbar()
  }
  handleNavbar = () => {
    const data = [
      {
        id: 1,
        name: 'Post',
        link: '/'
      },
      {
        id: 2,
        name: 'Register',
        link: '/register'
      },
      {
        id: 3,
        name: 'Login',
        link: '/login'
      },
      {
        id: 4,
        name: 'Profile',
        link: '#'
      },
      {
        id: 7,
        name: 'About',
        link: '/about'
      },
      {
        id: 5,
        name: 'Share',
        link: '/sharethought'
      },
      {
        id: 6,
        name: '######',
        link: '#'
      },
    ]
    this.setState({ dataNav: data })
  }

  render() {
    const{dataNav}= this.state
    return (
      <div className="App">
        <Router>
        <Navigation dataNav={dataNav}/>
        <div className="Container">
          <Aside dataNav={dataNav}/>
          <Main />
        </div>
        <Footer dataNav={dataNav}/>
                 
        </Router>
      </div>
    )
  }
}

export default App;
