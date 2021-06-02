import "./App.css";
import { Component } from "react";
import NavbarItems from "./components/layout/Navbar/NavbarItems";
import SliderItem from "./components/layout/Slider/SliderItem"
import FooterItem from "./components/layout/Footer/FooterItem"
class App extends Component {
  render() {
    return (
      <div className="App">  
      <NavbarItems />
      <SliderItem />
      <FooterItem />
      </div>
    );
  }
}

export default App;
