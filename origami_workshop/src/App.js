import './App.css';
import React from "react";
import Navigation from './components/Navigation'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'






function App() {
  return (
    <div>
      <Navigation />
      <div className="App Container">
      <Aside />
      <Main />
      </div>
      <Footer />
    </div>
  )
}
 
export default App;
