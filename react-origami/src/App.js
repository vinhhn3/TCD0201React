import './App.css';
import Navigation from "./components/layout/Navbar/Navigation";
import { Component } from 'react';
import Aside from './components/layout/Aside/Aside';
import Main from "./components/main/Main";
import Posts from "./components/post/Posts";
import Footer from "./components/layout/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Aside />
        <Main />
        <Posts />
        <Footer />



      </div>
    );
  }
}
export default App;
