import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <div className="navbar bg-primary">
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
    </div>
  );
};

export default Navbar;
