import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    count: 0,
    name: "Vinh Hoang",
    showName: true,
    showLoading: false,
  };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World !!!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <p>Full Name: {this.state.showName && this.state.name}</p>
        {this.state.showLoading ? (
          <h4>Loading ...</h4>
        ) : (
          <h2>Display Result</h2>
        )}
      </div>
    );
  }
}

export default App;
