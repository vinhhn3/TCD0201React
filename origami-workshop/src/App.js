import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Aside from "./components/layout/Aside/Aside";
import MainPublication from "./components/Publications/Main";
import MainUploadPost from "./components/UploadPost/Main";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="Container">
          <Aside/>
          <switch>
            <Route exact path="/" component={MainPublication}/>
            <Route exact path="/upload" component={MainUploadPost}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
