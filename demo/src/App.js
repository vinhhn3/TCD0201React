import React, { Component } from 'react';
import './App.css';
import './workshop-styles.css';
// import { BrowserRouter as Router, Route,NavLink,Switch } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import NotFound from './components/NotFound';
import Navigation from './components/Navigation'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'

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
        link: '#'
      },
      {
        id: 2,
        name: 'Register',
        link: '#'
      },
      {
        id: 3,
        name: 'Login',
        link: '#'
      },
      {
        id: 4,
        name: 'Profile',
        link: '#'
      },
      {
        id: 7,
        name: '######',
        link: '#'
      },
      {
        id: 5,
        name: '######',
        link: '#'
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
        <Navigation dataNav={dataNav}/>
        <div className="Container">
          <Aside dataNav={dataNav}/>
          <Main />
        </div>
        <Footer dataNav={dataNav}/>
        {/*          
          <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route component={NotFound}></Route>
          </Switch> */}
      </div>
    )
  }
}

export default App;
